import { useEffect, useRef, useState } from "react"

/** 修复坏掉的时钟 */
function Clock() {
  // 日期对象
  const [date, setDate] = useState(new Date())

  // 得到DOM元素
  const timeRef = useRef<HTMLHeadingElement>(null)

  // 与组件render无关的内容全部放到 副作用函数中
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    // 组件卸载时的清理函数
    return () => clearInterval(timer)
  }, [])

  // 当依赖项date发生变化时，执行副作用函数中的逻辑
  useEffect(() => {
    if (timeRef.current) {
      const hours = date.getHours()
      timeRef.current.className = hours >= 0 && hours <= 6 ? 'night' : 'light'
    }
  }, [date])
  

  return (
    <h1 ref={timeRef}>
      {date.toLocaleTimeString()} - {date.toLocaleDateString()}
    </h1>
  )
}

export default Clock
