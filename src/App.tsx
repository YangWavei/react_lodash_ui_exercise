import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2, _difference3,
  _differenceBy
} from "./util";
function App() {

  const res = _differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)
  console.log("🚀 ~ App ~ res:", res)

  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
