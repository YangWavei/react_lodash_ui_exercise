import type React from 'react';

/** 茶具(composition of Cup) */
function TeaGathering() {
  // 在写函数组件时必须要考虑作用域的问题
  const cups: Array<React.ReactNode> = [];
  for (let i = 0; i < 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  // React会自动对数组中的JSX元素进行渲染
  return cups;
}

/** 茶杯 */
function Cup({ guest }: { guest: number }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}


export default TeaGathering;
