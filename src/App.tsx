import { _pullAt } from "./util";

function App() {
  const arr = [5, 10, 15, 20];
  const evens = _pullAt(arr, 1, 3);
  console.log(arr);
  console.log(evens);
  return <div className="w-screen h-[30px] flex justify-center items-center">Lodash</div>;
}
export default App;
