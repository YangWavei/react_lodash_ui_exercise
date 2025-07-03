import type { ReactNode } from 'react';
import type React from 'react';

interface PropsType {
  children?: React.ReactNode;
  name: string;
  age: number;
  sex: 0 | 1;
}
/** 一个React组件只接受一个参数=>也就是一个props对象 */
function Avatar(prop: PropsType): ReactNode {
  const { name, age, children, sex } = prop;
  return (
    <>
      <div className=' w-[300px] h-[300px] rounded-2xl bg-sky-400'>
        <div>姓名{name}</div>
        <div>年龄{age}</div>
        <div>性别{sex === 1 ? '男' : '女'}</div>
        {children}
      </div>
    </>
  );
}

export default Avatar;
