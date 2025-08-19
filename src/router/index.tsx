import { Home, Rootlayout } from "@/page";
import { Button, Result, Spin } from "antd";
import { lazy, type ComponentType } from "react";
import { type RouteObject } from "react-router";

/** 用于懒加载组件 */
export function createComponent(com: () => Promise<{ default: ComponentType<any>; }>) {
  const Component = lazy(com);
  return Component;
}

const routes: RouteObject[] = [
  {
    path: '/',
    Component: Rootlayout,
    handle: {
      title: 'Root'
    },
    HydrateFallback: () => <Spin fullscreen />,
    children: [
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