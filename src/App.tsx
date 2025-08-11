import {
  _intersects,
  _intersects2
} from "./util/index";

const oceanFish = ['tuna', 'tarpon'];
const lakeFish = ['bass', 'trout'];

console.log(_intersects(oceanFish, lakeFish));
console.log(_intersects2(oceanFish, lakeFish));

const brackishFish = ['tarpon', 'snook'];

console.log(`------------------------------------`);
console.log(_intersects(oceanFish, brackishFish));
console.log(_intersects2(oceanFish, brackishFish));

function App() {
  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
