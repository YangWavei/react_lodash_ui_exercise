import {
  _alphabetical,
  _boil,
  _cluster,
  _cluster2,
  _cluster3,
  _cluster4,
  _counting,
  _counting2,
  _counting3,
  _diff,
  _diff2,
  _diff3,
  _diff4
} from "./util/index";

const oldWorldGods = ['ra', 'zeus'];
const newWorldGods = ['vishnu', 'zeus'];

function App() {
  const res = _diff(oldWorldGods, newWorldGods);
  const res2 = _diff2(oldWorldGods, newWorldGods);
  const res3 = _diff3(oldWorldGods, newWorldGods);
  const res4 = _diff4(oldWorldGods, newWorldGods);

  console.log("🚀 ~ App ~ res:", res);
  console.log("🚀 ~ App ~ res2:", res2);
  console.log("🚀 ~ App ~ res3:", res3);
  console.log("🚀 ~ App ~ res4:", res4);
  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
