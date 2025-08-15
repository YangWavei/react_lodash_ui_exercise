import { Button, Result } from "antd";
import { createBrowserRouter } from "react-router";

import App from "../App";
import { Detail, Home } from "../page/Index";

// 定义 fetchTeam 函数
const fetchTeam = (teamId: string) => {
  return new Promise<{ name: string; }>((resolve) => {
    setTimeout(() => {
      resolve({ name: '张三' + teamId });
    }, 2000);
  });
};

// 数据式
// 方案2: 如果需要嵌套路由，确保 Home 组件包含 Outlet
export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/detail/:teamId',
    Component: Detail,
    loader: async ({ params }) => {
      let team = await fetchTeam(params.teamId!);
      return {
        name: team.name,
        teamId: params.teamId,
        timestamp: new Date().toISOString()
      };
    },
    HydrateFallback: () => (
      <div className="p-4 text-center">
        <div className="text-lg">加载中...</div>
        <div className="text-gray-500">正在获取团队信息</div>
      </div>
    )
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