import { DotPattern } from "@/components/magicui/dot-pattern";

export default function Index() {

  return (
    <div className="w-full h-full text-[30px]">
      {/* 背景 */}
      <DotPattern className="absolute -z-50 flex" />
      <nav className="h-[8vh] w-screen bg-red-400/40 flex justify-between">
        <img className="w-[40px] h-[40px] flex-1/7" src="/vite.svg" alt="" />
        <ul className="w-[400px] bg-[#a4a4a4] flex-6/7 flex justify-around"></ul>
      </nav>
    </div>
  );
};