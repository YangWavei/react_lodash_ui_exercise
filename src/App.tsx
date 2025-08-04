import { _join, _join2 } from "./util";

function App() {
  console.log(_join(["a", "b", "c"], "~"));
  console.log(_join2(["a", "b", "c"], "~"));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
