export default function TypewriterEffect() {
  const str = "渲染代码位于组件的顶层，你在这里处理它们进行转换。";
  console.log(str.length);
  return (
    <h1 className="w-[25em] animate-typewriteEffectAnimate border-r-[1px] bg-amber-200/30 whitespace-nowrap overflow-hidden">
      {str}
    </h1>
  );
}
