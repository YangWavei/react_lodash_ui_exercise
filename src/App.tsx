import { Divider } from "antd";
import Counter from "./components/Counter";

/** 主组件 */
function App() {
  return (
    <div className="w-screen h-screen  bg-indigo-200 ">
      <div className="flex justify-center  items-center gap-2">
        <img src='/images/react.svg' alt="react_logo" title="react_logo" />
        <img src='/vite.svg' alt="react_logo" title="react_logo" />
      </div>
      <Divider />
      <Counter />
    </div>
  );
}
export default App;
