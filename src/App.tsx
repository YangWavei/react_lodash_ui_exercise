import { _zipObject, _zipObject2, _zipObject3 } from "./util";

function App() {
  console.log(_zipObject(["a", "b"], [1, 2]));
  console.log(_zipObject2(["a", "b"], [1, 2]));
  console.log(_zipObject3(["a", "b"], [1, 2]));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
