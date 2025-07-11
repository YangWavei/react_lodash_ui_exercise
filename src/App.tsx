import { Divider } from "antd";
import Gallery from "./components/Gallery";

/** 主组件 */
function App() {
  return (
    <div className="w-screen h-screen bg-sky-100 ">
      <div className="flex justify-center  items-center gap-2">
        <img src='/images/react.svg' alt="react_logo" title="react_logo" />
        <img src='/vite.svg' alt="react_logo" title="react_logo" />
      </div>
      <Gallery />
      <Divider />
      <Gallery />
    </div>
  );
}
export default App;
