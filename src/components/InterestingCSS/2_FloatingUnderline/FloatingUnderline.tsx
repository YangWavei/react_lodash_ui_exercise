import { useState } from "react";
import { clsx } from "clsx";
const list = [
  '小米官网',
  '小米商城',
  '小米澎湃OS',
  '小米汽车',
  '小米影像',
  '云服务',
  'IoT',
  '有品',
  '小爱开放平台'
]

function FloatingUnderline() {
  const [activeIndex, setIsActiveIndex] = useState(0)
  return (
    <div className="w-full flex h-[45px] bg-black/60">
      <div className="h-full w-[calc(100%/6)]"></div>
      <ul className="flex-1 flex-center gap-3 ">
        {
          list.map((el, index) => (
            <li className=
              {
                clsx(
                  index === activeIndex ? 'text-[var(--color-xiaomi)]' : 'text-white',
                  "min-lg:text-[12px] min-md:text-[10px] min-sm:text-[8px] max-sm:text-[8px] relative",
                  "cursor-pointer  hover:text-[var(--color-xiaomi)]",
                  "min-w-[60px] min-h-[30px] flex-center",
                  "before:beforeUnderline hover:before:w-full"
                )
              }
              key={el + index}
              onClick={() => setIsActiveIndex(index)}
            >
              {el}
            </li>
          ))
        }
      </ul>
      <div className="h-full w-[calc(100%/6)]"></div>
    </div>
  )
};

export default FloatingUnderline;