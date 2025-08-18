import { Outlet } from "react-router";

export default function Middleware() {
  return (
    <div>
      <div className="text-[50px] text-yellow-700">Middleware</div>
      <Outlet />
    </div>
  );
};
