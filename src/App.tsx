import { _flattenDeep, _flattenDeep2 } from "./util";

function App() {
  console.log(_flattenDeep([1, [2, [3, [4]], 5]]));
  console.log(_flattenDeep2([1, [2, [3, [4]], 5]]));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
