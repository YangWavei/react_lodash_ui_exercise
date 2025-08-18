import { useLoaderData, useParams } from "react-router";

export default function Team() {
  // 从路由loader中获取数据
  const data = useLoaderData() as { name: string, teamLocation: string; } | undefined;
  // params are available in components through useParams
  const params = useParams();

  // 显示团队信息
  return (
    <div className="p-4">
      <div className="text-lg font-semibold mb-4">Team 页面</div>
      {data ? (
        <div>
          <h2 className="text-red-500 font-bold text-[24px]">团队名称: {data.name}</h2>
          <h2 className="text-red-500 font-bold text-[24px]">团队地址: {data.teamLocation}</h2>
        </div>
      ) : (
        <div className="text-gray-500">加载中...</div>
      )}
      <div className="mt-4 text-gray-600">
        <p>团队ID: {params.teamId || '未知'}</p>
        <p>团队Location: {params.teamLocation || '未知'}</p>
        <p>当前路径: /teams/:teamId</p>
      </div>
    </div>
  );
};