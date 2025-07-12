import { Button } from "antd"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <Button type="primary" size="large" onClick={() => {
        // 这里告诉React `用state值做某事` 而不仅仅是替换它
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
      }}>
        +3
      </Button>
    </>
  )
}

export default Counter
