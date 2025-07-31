/** 鼠标悬浮阴影跳动效果 */
function HoverShadow() {
  return (
    <>
      <div className='flex-center cursor-pointer w-[100px] h-[100px] hover:text-red-800 border border-sky-400'>
        Text
      </div>
      {/* 设置外层主题 */}
      <div data-theme="midnight">
        {/* 内层元素使用变体控制样式 */}
        {/* variant (变体) 简单来说就是 在xxx的条件下应用xxx的样式 */}
        <div className="w-[70px] h-[70px] theme-midnight:bg-indigo-600"></div>
        <div className="w-[70px] h-[70px] bg-red-300"></div>
      </div>
    </>
  )
};

export default HoverShadow;