import { _intersection } from "./util";

function App() {
  console.log(_intersection());
  console.log(_intersection([1, 2], [4, 2], [1, 2]));

  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
