import { Button } from 'antd'
import { useState } from 'react';
function AnimateDemo() {
  const MAX_DISTANCE = 600;
  // 黄色小方块移动的距离
  const [distance, setDistance] = useState<number>(0)

  function handleMove() {
    // 下一次动画帧之前执行里面的回调函数
    requestAnimationFrame(() => {
      setDistance(prev => {
        const newDistance = prev + 1
        if (newDistance <= MAX_DISTANCE) handleMove()
        return newDistance
      })
    })
  }

  return (
    <div className='w-[600px] h-[400px] bg-red-400 flex flex-col py-4 justify-between'>
      <div className='w-[100px] h-[100px] bg-yellow-400' style={{
        transform: `translate3D(${distance}px,0,0)`
      }}>我是黄色小方块</div>
      <Button type="primary" className='w-[70px]' onClick={handleMove}>start</Button>
    </div>
  );
}

export default AnimateDemo
