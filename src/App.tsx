import { _pull, _pull2 } from "./util";

function App() {
  var array = [3, 1, 2];
  // _pull(array, 2, 1);
  _pull2(array, 2, 1);
  console.log(array);
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
