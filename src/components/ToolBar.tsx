import { Button } from "antd"

function ToolBar() {
  return (
    // 实际上这里会出现事件冒泡
    <div
      className=" w-[600px] h-[400px] bg-indigo-300 flex items-center justify-center gap-2"
      onClick={() => alert(`你点击了ToolBar!`)}
    >
      <Button size="large" onClick={e => {
        e.stopPropagation()
        // 当前点击的对象
        const clickedElement = e.currentTarget
        console.log("🚀 ~ ToolBar ~ clickedElement:", clickedElement)
        console.log(e);
        alert(`正在播放！`)
      }} >
        播放电影
      </Button>
      
      <Button size="large" onClick={e => {
        // 阻止事件向上冒泡
        e.stopPropagation()
        alert(`正在上传！`)
      }} >
        上传图片
      </Button>
    </div>
  )
}

export default ToolBar
