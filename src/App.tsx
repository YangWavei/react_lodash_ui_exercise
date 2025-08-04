import { _intersection } from "./util";

function App() {
  console.log(_intersection([2, 1, 3], [4, , 3, 2], [1, 2]));
  console.log(_intersection([2, 1, 3], [4, 3, 2]));
  console.log(_intersection([2, 1, 3, 2, 3, 1, 5, 4, 5]));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
