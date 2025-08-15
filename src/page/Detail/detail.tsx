import type { FC } from "react";
import { useLoaderData } from "react-router";

interface I_DetailProps {

}

const Detail: FC<I_DetailProps> = () => {
  const data = useLoaderData();
  console.log('Detail组件渲染，数据:', data);

  // 添加数据验证
  if (!data || !data.name) {
    return (
      <div className="p-4 text-center">
        <div className="text-lg text-red-500">数据加载失败</div>
        <div className="text-gray-500">请检查网络连接或刷新页面</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-lg font-semibold mb-4">Detail 页面</div>
      <h2 className="text-red-500 font-bold text-[24px]">团队名称: {data.name}</h2>
      <div className="mt-4 text-gray-600">
        <p>当前路径: /detail/:teamId</p>
        <p>数据加载成功!</p>
        <p>团队ID: {data.teamId || '未知'}</p>
      </div>
    </div>
  );
};
export default Detail;