import { Outlet } from "react-router";

export default function Index() {
  return (
    <div>
      <div className="text-[40px] font-bold">测试</div>
      {/* 插槽 */}
      <Outlet />
    </div>
  );
};
