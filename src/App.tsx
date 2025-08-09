import { _alphabetical, _boil, _cluster, _cluster2, _cluster3, _cluster4 } from "./util/index";
const gods = ['Ra', 'Zeus', 'Loki', 'Vishnu', 'Icarus', 'Osiris', 'Thor', 'Apollo', 'Artemis', 'Athena'];

function App() {
  const res = _cluster(gods, 3);
  const res2 = _cluster2(gods, 3);
  const res3 = _cluster3(gods, 3);
  const res4 = _cluster4(gods, 3);
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
