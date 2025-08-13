import * as RadashArray from './util';

function App() {
  const fish = [
    {
      name: 'Marlin',
      weight: 105
    },
    {
      name: 'Bass',
      weight: 8
    },
    {
      name: 'Trout',
      weight: 13
    }
  ];

  const res = RadashArray._sort(fish, f => f.weight);
  console.log("🚀 ~ App ~ res:", res);
  const res2 = RadashArray._sort(fish, f => f.weight, true);
  console.log("🚀 ~ App ~ res2:", res2);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;