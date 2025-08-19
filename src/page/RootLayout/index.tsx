import { DotPattern } from "@/components/magicui/dot-pattern";
import { Outlet } from "react-router";

export default function Rootlayout() {
  return (
    <>
      <DotPattern glow={true} className="absolute -z-50 flex" />
      <nav className="h-[80px] w-screen text-[2rem] flex justify-between">
        <div className="w-[100px] h-full bg-red-300/70 flex-center">
          <img src="/vite.svg" alt="Logo" />
        </div>
        <div className="w-[300px] h-full bg-lime-500/30 flex-1 flex justify-end">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </nav>
      {/* 插槽 */}
      <Outlet />
    </>
  );
};
