import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2, _difference3,
  _differenceBy,
  _drop,
  _dropRight
} from "./util";
function App() {
  console.log(_dropRight([1, 2, 3]));
  console.log(_dropRight([1, 2, 3], 2));
  console.log(_dropRight([1, 2, 3], 5));
  console.log(_dropRight([1, 2, 3], 0));
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
