import { Button } from "antd"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <Button type="primary" size="large" onClick={() => {
        // 这里告诉React `用state值做某事` 而不仅仅是替换它
        // count => count + 1 被称为更新函数。当将它传递给一个 state 设置函数(setXXX)时
        // 1.React会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理
        // 2.在下一次渲染期间，React会遍历队列并给你更新后的最终state
        setCount(count + 5)
        setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)
      }}>
        增加数值
      </Button>
    </>
  )
}

export default Counter
