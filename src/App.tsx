import TypewriterEffect from "./components/InterestingCSS/4_TypewriterEffect/TypewriterEffect";

function App() {
  return (
    <div className="w-screen h-screen">
      <TypewriterEffect />
      <div className="w-full h-[300px] bg-indigo-400/50 max-md:text-[1rem] min-md:text-[2rem] min-lg:text-[3rem] min-xl:text-[4rem] min-2xl:text-[5rem]">
        父元素的字体大小 <br />
        {/* em 是相对长度单位，相对于当前对象内的文本字体尺寸 */}
        <span className="text-[0.8em] text-red-600/70">子元素内容 </span>
      </div>
    </div>
  );
}
export default App;
