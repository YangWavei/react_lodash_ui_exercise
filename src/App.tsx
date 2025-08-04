import { _fromPairs, _fromPairs2, _fromPairs3 } from "./util";

function App() {
  const array = [
    ["fred", 30],
    ["banana", 40],
  ] as [string, number][];
  console.log(_fromPairs(array));
  console.log(_fromPairs2(array));
  console.log(_fromPairs3(array));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
