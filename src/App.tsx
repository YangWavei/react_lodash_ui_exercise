import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3
} from "./util";
function App() {
  const arr = [0, 1, false, 2, '', 3, undefined, null, NaN]
  console.log(_compact(arr));
  console.log(_compact2(arr));
  console.log(_compact3(arr));
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
