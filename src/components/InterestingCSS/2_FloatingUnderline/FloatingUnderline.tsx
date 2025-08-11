import { useState } from "react";
import { clsx } from "clsx";
const list = ["小米官网", "小米商城", "小米澎湃OS", "小米汽车", "小米影像", "云服务", "IoT", "有品", "小爱开放平台"];

function FloatingUnderline() {
  const [activeIndex, setIsActiveIndex] = useState(0);
  return (
    <div className="w-full flex h-[45px] bg-black/60">
      <div className="h-full w-[calc(100%/6)]"></div>
      <ul className="flex-1 flex-center gap-3 ">
        {list.map((el, index) => (
          <li
            className={clsx(
              index === activeIndex ? "text-[var(--color-xiaomi)]" : "text-white",
              "relative min-h-[30px] flex-center",
              "min-lg:text-[12px] min-md:text-[10px] min-sm:text-[8px] max-sm:text-[8px]",
              "min-lg:min-w-[45px] min-md:min-w-[30px] min-sm:min-w-[25px] max-sm:min-w-[20px]",
              "cursor-pointer  hover:text-[var(--color-xiaomi)] hover:before:w-full",
              "before:beforeUnderline "
            )}
            key={el + index}
            onClick={() => setIsActiveIndex(index)}
          >
            {el}
          </li>
        ))}
      </ul>
      <div className="h-full w-[calc(100%/6)]"></div>
    </div>
  );
}

export default FloatingUnderline;
