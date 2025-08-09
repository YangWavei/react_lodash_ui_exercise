import {
  _alphabetical,
  _boil,
  _cluster,
  _cluster2,
  _cluster3,
  _cluster4,
  _counting,
  _counting2,
  _counting3

} from "./util/index";
const gods = [
  {
    name: 'Ra',
    culture: 'egypt'
  },
  {
    name: 'Zeus',
    culture: 'greek'
  },
  {
    name: 'Loki',
    culture: 'greek'
  }
];

function App() {
  const res = _counting(gods, g => g.culture);
  const res2 = _counting2(gods, g => g.culture);
  const res3 = _counting3(gods, g => g.culture);

  console.log("🚀 ~ App ~ res:", res);
  console.log("🚀 ~ App ~ res2:", res2);
  console.log("🚀 ~ App ~ res3:", res3);

  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
