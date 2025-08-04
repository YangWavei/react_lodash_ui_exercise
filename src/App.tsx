import { _pullAt } from "./util";

function App() {
  var array = [3, 1, 2];
  const res = _pullAt(array, 2, 1);
  console.log(array);
  console.log("🚀 ~ App ~ res:", res);
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
