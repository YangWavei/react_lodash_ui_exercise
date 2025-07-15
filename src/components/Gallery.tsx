import { useState } from "react";
import { Button } from "antd";

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const hasNext = index < images.length - 1
  function handleClick() {
    if (hasNext) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  let image = images[index]
  return (
    <>
      <Button onClick={handleClick}>下一张</Button>
      <h3>
        {images.length} 张图片中第 {index + 1} 张
      </h3>
      {/* 给 img 标签一个唯一且稳定的 `key` ，当key更改时，React将重头开始创建 <img> DOM节点。
          这样可以确保图片和文本始终匹配
      */}
      <img src={image.src} alt="" key={image.src} />
      <p>{image.place}</p>
    </>
  )
};

let images = [{
  place: 'Penang, Malaysia',
  src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://i.imgur.com/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://i.imgur.com/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'https://i.imgur.com/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'https://i.imgur.com/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: 'https://i.imgur.com/3aIiwfm.jpg'
}];
