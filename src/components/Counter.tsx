import { Button } from "antd"
import { useState } from "react"

function Counter() {
  const [number, setNumber] = useState(0)
  return (
    <>
      <h1>{number}</h1>
      <Button type="primary" size="large"
        onClick={() => {
          // 通知React在下一次渲染将 number的状态加 1
          // `state 保存时间的快照`
          // setNumber(number + 1)
          // setNumber(number + 1)
          // setNumber(number + 1)
          setNumber(number + 5)
          setTimeout(() => {
            alert(number)
          }, 3000);
        }}>
        +3
      </Button>
    </>
  )
}

export default Counter
