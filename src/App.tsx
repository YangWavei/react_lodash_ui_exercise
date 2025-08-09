import { _alphabetical, _boil } from "./util/index";
const goods = [
  {
    name: 'Ra',
    power: 100
  },
  {
    name: 'Zeus',
    power: 98
  },
  {
    name: 'Loki',
    power: 72
  },
];

function App() {
  const res = _boil(goods, (a, b) => (a.power > b.power) ? a : b);
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
