import {
  _group,
  _group2,
  _group3
} from "./util/index";

const fish = [
  {
    name: 'Marlin',
    source: 'ocean'
  },
  {
    name: 'Bass',
    source: 'lake'
  },
  {
    name: 'Trout',
    source: 'lake'
  }
];

const fishBySource = _group(fish, f => f.source); // => { ocean: [marlin], lake: [bass, trout] }
const fishBySource2 = _group2(fish, f => f.source); // => { ocean: [marlin], lake: [bass, trout] }
const fishBySource3 = _group3(fish, f => f.source); // => { ocean: [marlin], lake: [bass, trout] }
console.log("🚀 ~ fishBySource:", fishBySource);
console.log("🚀 ~ fishBySource2:", fishBySource2);
console.log("🚀 ~ fishBySource3:", fishBySource3);

function App() {
  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
