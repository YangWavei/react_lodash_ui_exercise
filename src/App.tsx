import * as RadashArray from './util';

function App() {
  const fish = [
    {
      name: 'Marlin',
      weight: 105
    },
    {
      name: 'Bass',
      weight: 7
    },
    {
      name: 'Trout',
      weight: 13
    }
  ];

  const res = RadashArray._sum(fish, f => f.weight);
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;