import { DotPattern } from "@/components/magicui/dot-pattern";
import { Outlet } from "react-router";

export default function Rootlayout() {
  return (
    <>
      <DotPattern glow={true} className="absolute -z-50 flex" />
      <nav className="h-[60px] w-screen bg-black/20 text-[2rem] flex-center">
        Rootlayout 根布局页面 👋
      </nav>
      {/* 插槽 */}
      <Outlet />
    </>
  );
};
