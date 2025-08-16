import { lazy, type ComponentType } from "react";
import { type RouteObject } from "react-router";

export function createComponent(com: () => Promise<{ default: ComponentType<any>; }>) {
  const Component = lazy(com);
  return Component;
}

const routes: RouteObject[] = [
  {
    path: '/',
    Component: createComponent(() => import('../page/home/index')),
    handle: {
      title: '首页'
    },
    children: [
      {
        path: 'detail',
        Component: createComponent(() => import('../page/detail/index'))
      }
    ]
  }
];

export default routes;