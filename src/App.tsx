import { _chunk, _chunk2, _chunk3, _chunk4 } from "./util";
function App() {
  const arr = [3, 5, 9, 'd']
  console.log(_chunk4(arr, 0));
  console.log(_chunk4(arr, 1));
  console.log(_chunk4(arr, 2));
  console.log(_chunk4(arr, 3));
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
