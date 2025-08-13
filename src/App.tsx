import * as RadashArray from './util';

function App() {
  const ra = { name: 'Ra' };
  const zeus = { name: 'Zeus' };
  const loki = { name: 'Loki' };
  const vishnu = { name: 'Vishnu' };
  const gods = [ra, zeus, loki];
  const res = RadashArray._toggle(gods, ra, g => g.name);
  const res2 = RadashArray._toggle(gods, vishnu, g => g.name, { strategy: 'prepend' });

  console.log("🚀 ~ App ~ res:", res);
  console.log("🚀 ~ App ~ res2:", res2);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;