import * as RadashArray from './util';

function App() {
  const fish = [
    {
      name: 'Marlin',
      weight: 105,
      source: 'ocean'
    },
    {
      name: 'Bass',
      weight: 8,
      source: 'lake'
    },
    {
      name: 'Trout',
      weight: 13,
      source: 'lake'
    }
  ];

  const res = RadashArray._select(
    fish,
    f => f.weight,
    f => f.source === 'lake'
  );
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;