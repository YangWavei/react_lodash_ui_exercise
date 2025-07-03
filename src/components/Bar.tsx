import { useState } from 'react';

/** 将组件作为函数 */
function Bar() {
  const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  function handleDelOneLi(item: number) {
    // immutable 不可变数据
    setArr(arr.filter(ele => ele !== item));
  }
  return (
    <>
      <ul>
        {arr.map(ele => (
          <li className='w-[300px] h-[40px] my-2  flex items-center justify-between px-10 bg-indigo-200' key={ele}>
            {ele}
            <span className='cursor-pointer text-[red]' onClick={() => handleDelOneLi(ele)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Bar;
