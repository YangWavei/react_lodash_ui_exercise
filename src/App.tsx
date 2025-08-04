import { _zip, _zip2 } from "./util";

function App() {
  const res = _zip(["fred", "barney"], [30, 40], [true, false]);
  console.log("🚀 ~ App ~ res:", res);
  _zip2(res);
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
