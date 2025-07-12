import { useState } from "react"
import { Button } from "antd";


let initialCounters = [
  0, 0, 0
];
function List() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1
      } else {
        return c
      }
    })
    setCounters(nextCounters)
  }
  
  return (
    <>
      <ul>
        {counters.map((counter, i) => (
          <li key={i} className="flex gap-2">
            {counter}
            <Button type="primary" danger onClick={() => {
              handleIncrementClick(i);
            }}>+1</Button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List;
