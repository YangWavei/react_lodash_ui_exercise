import { Home } from '@/page';
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
    Component: Home,
    handle: {
      title: '首页'
    }
  },
  {
    path: 'detail',
    Component: createComponent(() => import('@/page/detail'))
  }
];

export default routes;