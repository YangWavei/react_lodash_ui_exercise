import { Button, Result } from "antd";
import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../page/Index";

// 数据式
// 方案2: 如果需要嵌套路由，确保 Home 组件包含 Outlet
export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'home',
        Component: Home,
      }
    ]
  },
  {
    path: '*',
    element: (
      <Result
        status="404"
        title="404"
        subTitle="很抱歉, 当前页面不存在。"
        extra={
          <Button type="primary" href="/">
            去首页
          </Button>
        }
      />
    ),
    handle: {
      title: '404',
    },
  },
]);