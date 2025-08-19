import { Logo } from "@/components/Logo/Logo";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ToggleTheme from "@/components/ToggleTheme";
import { ArrowUpFromLine, Camera, Github, Mic, TestTubeDiagonal } from "lucide-react";
import { NavLink, Outlet } from "react-router";
import './index.css';

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export default function Rootlayout() {
  return (
    <>
      <div className="fixed -z-50 w-full h-full">
        <DotPattern glow={true} className="absolute inset-0 w-full h-full" />
      </div>
      <header className="z-40">
        <NavLink to={"/"} className="w-16 h-16 absolute xl:fixed m-5 select-none outline-none" autoFocus={false}>
          <Logo />
        </NavLink>
        {/* Back To Top */}
        <button
          onClick={toTop}
          title="Scroll To Top"
          className="fixed right-6 bottom-4 w-10 h-10 flex-center rounded-[9999px] border border-yellow-400 cursor-pointer"
        >
          <ArrowUpFromLine />
        </button>
        <nav className="w-[100%] h-[6rem] flex justify-between">
          <div className="w-16 m-5"></div>
          <div className="flex-1 flex justify-end bg-orange-500/20 gap-2 items-center px-8">
            <NavLink to={"/"}>
              <span>Blog</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Projects</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Talks</span>
            </NavLink>
            <NavLink to={"/"}>
              <span>Sponsors</span>
            </NavLink>
            <NavLink to={"/"}>
              <Mic />
            </NavLink>
            <NavLink to={"/"}>
              <Camera />
            </NavLink>
            <NavLink to={"/"}>
              <TestTubeDiagonal />
            </NavLink>
            <NavLink to={"/"}>
              <Github />
            </NavLink>
            <ToggleTheme />
          </div>
        </nav>
      </header>
      {/* 插槽 */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
