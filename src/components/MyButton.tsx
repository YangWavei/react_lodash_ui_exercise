import { Button } from "antd"
import type { ReactNode } from "react"

interface MyButtonParamsType {
  onSmash: () => void
  children?: ReactNode
}
  
/** 自定义组件，并且会阻止事件冒泡 */
function MyButton({ onSmash, children }: MyButtonParamsType) {
  return (
    <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onSmash?.()
    }} >
      {children}
    </Button >
  )
}

export default MyButton
