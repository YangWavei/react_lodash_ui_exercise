import { Button } from "antd"
import type { ReactNode } from "react"

interface AlertButtonParamsType {
  message: string,
  children?: ReactNode
}
/** 点击后alert的按钮 */
function AlertButton({ message, children }: AlertButtonParamsType) {
  return (
    <Button onClick={() => alert(message)}>
      {children}
    </Button>
  )
}

export default AlertButton
