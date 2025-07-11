import { Button } from "antd";
import type { ReactNode } from "react";

interface MyButtonParamsType {
  onSmash: () => void
  children?: ReactNode
}

/** 自定义按钮
 * 接收一个名为onClick的prop，它将这个属性prop 以 onClick={onClick}
 * 方式传递给浏览器内置的 <button>。当点击按钮时，React 会调用传入的函数。
 */
function MyButton({ onSmash, children }: MyButtonParamsType) {
  return (
    <>
      <Button size="large" onClick={onSmash} >
        {children}
      </Button>
    </>
  )
}

/** 播放按钮 */
function PlayButton({ movieName }: { movieName: string }) {
  const handlePlay = () => {
    alert(`正在播放 "${movieName}"`)
  }
  return (
    <MyButton onSmash={handlePlay}>
      播放 "{movieName}"
    </MyButton>
  )
}

function UploadButton() {
  return (
    <MyButton onSmash={() => alert(`正在上传`)}>
      开始上传
    </MyButton>
  )
}

/** 工具栏 */
function ToolBar() {
  return (
    <div className="flex gap-2">
      <PlayButton movieName="魔女宅急便" />
      <UploadButton />
    </div>
  )
}

interface ToolBarMoreParamsType {
  onPlayMovie: () => void
  onUploadImage: () => void
}
function ToolBarMore({ onPlayMovie, onUploadImage }: ToolBarMoreParamsType) {
  return (
    <div className="flex gap-2">
      <MyButton onSmash={onPlayMovie}>
        播放电影
      </MyButton>
      <MyButton onSmash={onUploadImage} >
        上传图片
      </MyButton>
    </div>
  )
}
export default ToolBarMore
