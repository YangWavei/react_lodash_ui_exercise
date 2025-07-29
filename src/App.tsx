import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat
} from "./util";
function App() {
  const array = [1]
  const other = _concat(array, 2, [3], [[4]])
  console.log(array);
  console.log("🚀 ~ App ~ other:", other)
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
