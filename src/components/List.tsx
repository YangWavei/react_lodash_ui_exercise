import { useState } from "react"
import { Button, Input } from "antd";


let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function List() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape
      } else {
        return {
          ...shape,
          y: shape.y + 50
        }
      }
    })
    setShapes(nextShapes)
  }

  return (
    <>
      <Button type="primary" onClick={handleClick}>
        所有圆形向下移动！
      </Button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }} />
      ))}
    </>
  )
}

export default List;
