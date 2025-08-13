import * as RadashArray from './util';

function App() {
  const fish = [
    {
      name: 'Marlin',
      weight: 105
    },
    {
      name: 'Salmon',
      weight: 19
    },
    {
      name: 'Trout',
      weight: 13
    }
  ];

  const salmon = {
    name: 'Salmon',
    weight: 22
  };

  const sockeye = {
    name: 'Sockeye',
    weight: 8
  };

  const res1 = RadashArray._replace(fish, salmon, f => f.name === 'Salmon');
  console.log("🚀 ~ App ~ res1:", res1);

  const res2 = RadashArray._replace(fish, sockeye, f => f.name === 'Sockeye');
  console.log("🚀 ~ App ~ res2:", res2);

  console.log(fish);
  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;