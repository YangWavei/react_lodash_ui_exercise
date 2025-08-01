import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2, _difference3,
  _differenceBy,
  _drop,
  _dropRight,
  _dropRightWhile,
  _fill
} from "./util";

function App() {
  let array = [1, 2, 3];
  console.log(_fill(array, 'a'));
  console.log(_fill(Array(3), 2));
  console.log(_fill([4, 6, 8, 10], '*', 1, 3));
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
