import { _flattenDepth, _flattenDepth2, _flattenDepth3 } from "./util";

function App() {
  var array = [1, [2, [3, [4]], 5]];
  console.log(_flattenDepth(array, 1));
  console.log(_flattenDepth(array, 2));
  console.log(`==========================`);
  console.log(_flattenDepth2(array, 1));
  console.log(_flattenDepth2(array, 2));
  console.log(`==========================`);
  console.log(_flattenDepth3(array, 1));
  console.log(_flattenDepth3(array, 2));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
