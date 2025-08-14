import * as RadashArray from './util';

function App() {

  const fish = [
    {
      name: 'Marlin',
      weight: 105,
      source: 'ocean'
    },
    {
      name: 'Salmon',
      weight: 22,
      source: 'river'
    },
    {
      name: 'Salmon',
      weight: 22,
      source: 'river'
    }
  ];

  const res = RadashArray._unique(fish, f => f.name);
  const res2 = RadashArray._unique2(fish, f => f.name);
  const res3 = RadashArray._unique3(fish, f => f.name);
  console.log("🚀 ~ App ~ res:", res);
  console.log("🚀 ~ App ~ res2:", res2);
  console.log("🚀 ~ App ~ res3:", res3);
  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;