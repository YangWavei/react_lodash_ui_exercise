import { Logo } from "@/components/Logo";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ToggleTheme from "@/components/ToggleTheme";
import { useScroll } from "ahooks";
import clsx from "clsx";
import { ArrowUpFromLine, Camera, Github, Mic, TestTubeDiagonal } from "lucide-react";
import { useRef } from "react";
import { NavLink, Outlet } from "react-router";

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export default function Rootlayout() {
  const scrollRef = useRef(null);
  const scroll = useScroll();

  return (
    <>
      <div className="fixed -z-50 w-full h-full">
        <DotPattern glow={true} className="absolute inset-0 w-full h-full" />
      </div>
      <header className="z-40" ref={scrollRef}>
        <NavLink to={"/"} className="w-16 h-16 absolute xl:fixed m-5 select-none outline-none" autoFocus={false}>
          <Logo />
        </NavLink>
        {/* Back To Top */}
        <button
          onClick={toTop}
          title="Scroll To Top"
          className=
          {clsx("fixed right-6 bottom-4 w-10 h-10 flex-center rounded-[9999px] hover:bg-[#e7e7e7]  transition-all cursor-pointer",
            "dark:hover:bg-[#1f1f1f]",
            (scroll && scroll?.top < 800) && 'hidden')}
        >
          <ArrowUpFromLine />
        </button>
        <nav className="w-[100%] h-[6rem] flex justify-between">
          <div className="w-16 m-5"></div>
          <div className="flex-1 flex justify-end gap-4 items-center px-8">
            <NavLink to={"/"} className={"hidden md:block"}>
              <span>Blog</span>
            </NavLink>
            <NavLink to={"/"} className={"hidden md:block"}>
              <span >Projects</span>
            </NavLink>
            <NavLink to={"/"} className={"hidden md:block"}>
              <span >Talks</span>
            </NavLink>
            <NavLink to={"/"} className={"hidden md:block"}>
              <span>Sponsors</span>
            </NavLink>
            <NavLink to={"/"}>
              <Mic scale={0.8} />
            </NavLink>
            <NavLink to={"/"}>
              <Camera scale={0.8} />
            </NavLink>
            <NavLink to={"/"}>
              <TestTubeDiagonal scale={0.8} />
            </NavLink>
            <NavLink to={"https://github.com/aeasx"} target="_blank" >
              <Github scale={0.8} />
            </NavLink>
            <ToggleTheme />
          </div>
        </nav>
      </header>
      <div className="w-full m-auto max-w-[1000px] px-16">
        {/* 插槽 */}
        <Outlet />
      </div>
    </>
  );
};
