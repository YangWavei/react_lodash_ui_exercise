import { useRef, useState } from "react";
import { Button } from "antd";
import './CatFriends.css';
import { flushSync } from "react-dom";
export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef<null | HTMLImageElement>(null)

  const handleClick = () => {

    // state发生改变后，强制DOM同步刷新
    flushSync(() => {
      index < catList.length - 1 ? setIndex(index + 1) : setIndex(0)
    })

    selectedRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  return (
    <>
      <nav>
        <Button onClick={handleClick}>
          next
        </Button>
      </nav>
      <div>
        <ul>
          {
            catList.map((cat, i) => (
              <li key={cat.id} className="my-3">
                <img ref={index === i ? selectedRef : null} className={index === i ? 'active' : ''} src={cat.imageUrl} alt={"猫猫 #" + cat.id} />
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
};

interface I_Cat {
  id: number,
  imageUrl: string
}

const catList: I_Cat[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}
