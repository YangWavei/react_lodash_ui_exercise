import AlertButton from "./AlertButton"

function ToolBar() {
  return (
    <div className="flex  gap-2">
      <AlertButton message="正在播放！">
        播放电影
      </AlertButton>
      <AlertButton message="正在上传">
        上传图片
      </AlertButton>
    </div>
  )
}
export default ToolBar
