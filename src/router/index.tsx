import { EditProject, Home, Project, ProjectHome, Team } from "@/page";
import { Button, Result, Spin } from "antd";
import { lazy, type ComponentType } from "react";
import { type RouteObject } from "react-router";

/** 用于懒加载组件 */
export function createComponent(com: () => Promise<{ default: ComponentType<any>; }>) {
  const Component = lazy(com);
  return Component;
}

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
    Component: createComponent(() => import('@/page/RootLayout')),
    handle: {
      title: '首页'
    },
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
    // no component,just path...
    path: '/projects',
    children: [
      {
        index: true, Component: ProjectHome
      },
      // 路径以冒号(`:`) 开头，则它成为`动态段`。当路由与URL匹配时，动态段将从URL中解析出来，并
      // 作为参数提供给其它路由器
      {
        path: ':pid', Component: Project
      },
      {
        path: ':pic/edit', Component: EditProject
      }
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
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href="/">Return Home</Button>}
      />
    ),
    handle: {
      title: '404',
    },
  }
];

export default routes;