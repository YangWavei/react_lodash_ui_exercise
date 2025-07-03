import { useState } from "react";
import { Button } from 'antd'
/** 将组件作为函数 */
function Bar() {
  const [count, setCount] = useState<number>(0)

  function addCount() {
    // 3种方式

    //1、 可以设置新值
    // setCount(handleCountAdd)
    //2、采用函数式更新
    //3、
    setCount(prev => prev + 2)
    // setCount(handleCountAdd) // 先执行函数，用其返回值作为新state
  }
  

  function decreaseCount() {
    setCount(prev => prev - 2)
  }

  return (
    <>
      <div className='w-[600px] h-[200px] bg-fuchsia-400'>
        <span>bar组件 <strong>我是一个简单的计数器</strong></span>
        <div className="h-[100px]">
          <h2>{count}</h2>
          <div className="w-full flex gap-2">
            <Button type="primary" onClick={addCount}>增加</Button>
            <Button onClick={decreaseCount}>减少</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Bar;
