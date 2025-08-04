import { _zip, _zip2 } from "./util";

function App() {
  const res = _zip(["fred", "barney"], [30, 40], [true, false]);
  console.log("🚀 ~ App ~ res:", res);
  const res2 = _zip2(["fred", "barney"], [30, 40], [true, false]);
  console.log("🚀 ~ App ~ res2:", res2);

  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
