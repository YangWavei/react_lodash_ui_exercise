import { _alphabetical } from "./util/index";
function App() {
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
    {
      name: 'Vishnu',
      power: 100
    }
  ];
  const sortRes1 = _alphabetical(goods, good => good.name, 'desc');
  const sortRes2 = _alphabetical(goods, good => good.name);

  console.log("🚀 ~ App ~ sortRes1:", sortRes1);
  console.log("🚀 ~ App ~ sortRes2:", sortRes2);

  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
