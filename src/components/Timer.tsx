import { useEffect, useState } from "react"

export default function Timer() {
  const [count, setCount] = useState(0)
  // 只在组件挂在后执行一次
  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setInterval(() => {
      console.log('⏰ Interval');
      // 使用函数式更新总是基于最新state
      // 适合高频更新
      // 批量更新时更加可靠
      // 避免了闭包陷阱
      setCount(prev => prev + 1)
    }, 1000);
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id)
    }
  }, [])
  return <h1>计数器 ：{count}</h1>
};
