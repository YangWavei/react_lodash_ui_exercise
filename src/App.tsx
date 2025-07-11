import { useEffect } from "react";
import TeaGathering from "./components/TeaGathering";

/** 主组件 */
function App() {
  // useEffect用于处理与组件渲染无关的内容
  // 这会告诉React在渲染结束后执行它，类似与Vue中的 onMounted
  // 组件挂载完成后执行
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`1s后执行`);
    }, 1000)
    // 这里的回调函数相当于Vue3中的onBeforeUnmount()
    // 在组件卸载之前调用
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen h-screen bg-sky-100">
      <TeaGathering />
    </div>
  );
}
// Props是只读的时间快照：每次渲染时都会收到新版本的Props
// 不能修改Props，(React的最大特性就是不可变数据)，当我们需要交互性时，可以设置state
export default App;
