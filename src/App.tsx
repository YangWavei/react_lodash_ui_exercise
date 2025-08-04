import { _flatten, _flatten2, _flatten3 } from "./util";

function App() {
  console.log(_flatten([1, [2, [3, [4]], 5]]));
  console.log(_flatten2([1, [2, [3, [4]], 5]]));
  console.log(_flatten3([1, [2, [3, [4]], 5]]));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
