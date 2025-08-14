import * as RadashArray from './util';

function App() {

  const names = ['ra', 'zeus', 'loki'];
  const cultures = ['egypt', 'greek'];

  const res = RadashArray._zipToObject(names, cultures);
  const res2 = RadashArray._zipToObject2(names, cultures);
  console.log("🚀 ~ App ~ res:", res);
  console.log("🚀 ~ App ~ res2:", res2);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;