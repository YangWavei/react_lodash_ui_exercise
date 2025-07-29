import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2
} from "./util";
function App() {
  const array = [3, 2, 1]
  console.log(_difference(array, [4, 2]));
  console.log(_difference2(array, [4, 2]));

  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
