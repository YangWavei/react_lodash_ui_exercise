import {
  _differenceBy
} from "./util";
function App() {
  console.log(_differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));
  console.log(_differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
