import { AuthMiddleWare, EditProject, Home, Middleware, Project, ProjectHome, Rootlayout, Team } from "@/page";
import { Button, Result, Spin } from "antd";
import { lazy, type ComponentType } from "react";
import { redirect, unstable_createContext, type LoaderFunction, type RouteObject, type unstable_MiddlewareFunction } from "react-router";

/** 用于懒加载组件 */
export function createComponent(com: () => Promise<{ default: ComponentType<any>; }>) {
  const Component = lazy(com);
  return Component;
}

const loggingMiddleware: unstable_MiddlewareFunction = async ({ request }, next) => {
  const url = new URL(request.url);
  console.log(`Starting navigation: ${url.pathname}${url.search}`);
  const start = performance.now();
  const result = await next();
  console.log(`Navigation completed in ${performance.now() - start}ms`);
  return result;
};

export interface User {
  id: number,
  name: string,
  age: number;
}

export const userContext = unstable_createContext<User>();

const getUserId = () => {
  // 模拟可能返回的情况
  const arr = [null, 2, 5, 23, 6, 1, 74, NaN, 0, undefined, 31];
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

// 实际项目中应替换为真是的API
const getUserById = async (userId: number) => {
  return new Promise<User>(resolve => {
    setTimeout(() => {
      resolve({
        name: '张三',
        age: 22,
        id: userId
      });
    }, 1000);
  });
};

const authMiddleware: unstable_MiddlewareFunction = async ({ context }, next) => {
  console.log('Auth middleware triggered');
  const userId = getUserId();
  console.log('User ID from getUserId:', userId);

  if (!userId) {
    console.log('No user ID, redirecting to /login');
    throw redirect('/login');
  }

  const user = await getUserById(userId);
  console.log('User fetched:', user);
  context.set(userContext, user);
  console.log('User set in context');

  return next();
};

/** 路由加载器在渲染路由组件之前提供数据 */
const authLoader: LoaderFunction = ({ context }) => {
  const user = context.get(userContext);
  if (!user) {
    throw redirect('/login');
  }
  return user;
};

// 模拟fetchTeam函数，实际项目中应替换为真实的API调用
async function fetchTeam(teamId: string | undefined, teamLocation: string | undefined) {
  // 模拟异步请求
  return new Promise<{ name: string, location: string | undefined; }>(resolve => {
    setTimeout(() => {
      resolve({ name: `Team ${teamId}`, location: teamLocation });
    }, 100);
  });
}

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Rootlayout,
    handle: {
      title: '首页'
    },
    HydrateFallback: () => <Spin fullscreen />,
    children: [
      // Index routes render into their parent's Outlet at their parent's URL
      // (like a default route)
      // Note that index routes can't have children.
      {
        index: true,
        Component: Home
      },
      {
        path: 'detail',
        Component: createComponent(() => import('@/page/detail'))
      }
    ]
  },
  {
    path: '/middleware',
    Component: Middleware,
    // 最小 loader，确保中间件链路被触发！！！ 需要loader才能触发中间件！！！
    loader: async () => null,
    // 日志记录中间件（服务端/静态处理）
    unstable_middleware: [loggingMiddleware],
    children: [
      {
        path: 'authmiddleware',
        Component: AuthMiddleWare,
        loader: authLoader,
        unstable_middleware: [authMiddleware],
        children: []
      },
    ],
    HydrateFallback: () => <Spin fullscreen />
  },
  {
    path: '/login',
    lazy: async () => {
      // 解构出默认导出
      const { default: Component } = await import("@/page/middleWare/loginMiddleWare");
      return { Component };
    },
    // Component: createComponent(() => import('@/page/middleWare/loginMiddleWare')),
    HydrateFallback: () => <Spin fullscreen />
  },
  {
    // no component,just path...
    path: '/projects',
    children: [
      { index: true, Component: ProjectHome },
      // 路径以冒号(`:`) 开头，则它成为`动态段`。当路由与URL匹配时，动态段将从URL中解析出来，并
      // 作为参数提供给其它路由器
      { path: ':pid', Component: Project },
      { path: ':pid?/edit', Component: EditProject }
    ]
    // This creates the routes `/projects` ,`projects/:pid`,and `/project/:pid/edit` without
    // introducing a layout component.
  },
  {
    path: 'teams/:teamId/p/:teamLocation',
    Component: Team,
    loader: async ({ params }) => {
      // params are aviable in loaders/actions
      let team = await fetchTeam(params.teamId, params.teamLocation);
      return { name: team.name, teamLocation: team.location };
    },
    HydrateFallback: () => <Spin fullscreen />
  },
  {
    // 通配符(星号) 选择器。如果一个路由路径模式以 `/*` 结尾，那么它将
    // 匹配跟随的任何字符，包括其它 `/` 字符
    path: 'splat/*',
    Component: createComponent(() => import('@/page/splat')),
    loader: async ({ params }) => {
      const { "*": splat } = params;
      console.log("🚀 ~ splat:", splat);
      console.log(`params['*']`, params['*']);
    }
  },
  {
    // 通配符路径，会匹配所有未被其它路由规则匹配的路径。
    // 再 react-router中，这种通配符路由通常放在路由配置的最后，作为`兜底`路由。
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href="/">Return Home</Button>}
      />
    ),
    // 为该路由设置的元数据
    handle: {
      title: '404',
    },
  }
];

export default routes;