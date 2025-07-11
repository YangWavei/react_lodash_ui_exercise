import { Button } from "antd";
import type { ReactNode } from "react";

interface MyButtonParamsType {
  onClick: () => void
  children?: ReactNode
}

/** 自定义按钮
 * 接收一个名为onClick的prop，它将这个属性prop 以 onClick={onClick}
 * 方式传递给浏览器内置的 <button>。当点击按钮时，React 会调用传入的函数。
 */
function MyButton({ onClick, children }: MyButtonParamsType) {
  return (
    <>
      <Button onClick={onClick} >
        {children}
      </Button>
    </>
  )
}


function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`正在播放${movieName}`)
  }
  return (
    // 这里的onClick其实是父组件的属性，该属性是一个函数，这里我们使用handlePlayClick
    // 作为`onClick` prop 传入 Button 组件内部
    // 将组件从父组件接收的prop作为事件处理函数传递
    <MyButton onClick={handlePlayClick}>
      播放 "{movieName}"
    </MyButton>
  )
}


function UploadButton() {
  return (
    // 这里将 `() => alert(`正在上传`)` 作为 `onClick` prop 传入MyButton组件内部
    <MyButton onClick={() => alert(`正在上传`)}>
      上传图片
    </MyButton>
  )
}


function ToolBar() {
  return (
    <div className="flex gap-2">
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  )
}

export default ToolBar
