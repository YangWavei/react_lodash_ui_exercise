import * as RadashArray from './util';

function App() {

  const names = ['ra', 'zeus', 'loki'];
  const cultures = ['egypt', 'greek', 'norse'];

  const res1 = RadashArray._zipToObject(names, cultures);
  const res2 = RadashArray._zipToObject(names, null);
  const res3 = RadashArray._zipToObject(names, (k: string, i: number) => k + i);

  console.log("🚀 ~ App ~ res1:", res1);
  console.log("🚀 ~ App ~ res2:", res2);
  console.log("🚀 ~ App ~ res3:", res3);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;