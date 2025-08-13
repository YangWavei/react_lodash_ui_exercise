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

  ];

  const newsFish = [
    {
      name: 'Bass',
      weight: 13,
      source: 'land'
    }
  ];

  console.log(RadashArray._merge(fish, newsFish, f => f.name));
  return (
    <div className="w-screen h-screen">
      测试 radash
    </div>
  );
}
export default App;