/** 鼠标悬浮阴影跳动效果 */
function HoverShadow() {
  return (
    <div>
      <h1 className="
        w-screen h-[60px] 
        flex-center bg-amber-100 font-bold text-[24px] cursor-pointer text-[#bfdf76] 
        hover:animate-(--hoverShadowAnimate)
        ">
        hello
      </h1>
      <hr className="my-2" />
      <div className="w-[100px] h-[100px]  bg-indigo-500 hoverShadowBox">
        你好
      </div>
    </div>
  )
};

export default HoverShadow;