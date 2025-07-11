import ToolBarMore from "./components/ToolBar";
/** 主组件 */
function App() {
  return (
    <div className="w-screen h-screen bg-sky-100 flex justify-center  items-center">
      <img src='/images/react.svg' alt="react_logo" title="react_logo" />
      <img src='/vite.svg' alt="react_logo" title="react_logo" />
      <ToolBarMore
        onPlayMovie={() => alert(`正在播放`)}
        onUploadImage={() => alert(`正在上传`)}
      />
    </div>
  );
}
export default App;
