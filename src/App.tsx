import ZY_Card from "./components/uuiMortyDesign/Card/ZY-Card";
function App() {
  return (
    <div className="w-screen h-screen">
      <ZY_Card >
        <span className="dark:text-sky-300"> 我是插槽中的内容 </span>
      </ZY_Card>
    </div>
  )
};
export default App;
