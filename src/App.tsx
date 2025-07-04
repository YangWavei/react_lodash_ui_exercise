import PackingList from "./components/Bar";
import DrinkList from "./components/Drink";

/** 主组件 */
function App() {
  return (
    <div>
      <img src="/vite.svg" alt="" />
      <img src="/images/react.svg" alt="" />
      <PackingList />
      <DrinkList />
    </div>
  );
}
// Props是只读的时间快照：每次渲染时都会收到新版本的Props
// 不能修改Props，(React的最大特性就是不可变数据)，当我们需要交互性时，可以设置state
export default App;
