import { useState } from 'react'
import './picture.css'
/** 声明式UI，添加和删除一个css Class */
export default function Picture() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={isActive ? "background" : "background background--active"}>
      <img
        className={isActive ? "picture picture--active cursor-pointer" : 'picture cursor-pointer'}
        onClick={() => setIsActive(a => !a)}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  )
};

