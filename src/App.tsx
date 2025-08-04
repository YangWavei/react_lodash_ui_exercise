import { _head } from "./util";

function App() {
  console.log(_head([1, 2, 3]));
  console.log(_head([]));
  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
