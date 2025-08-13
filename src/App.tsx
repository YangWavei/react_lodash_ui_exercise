import * as RadashArray from './util';

function App() {
  const fish = ['salmon', null, false, NaN, 'sockeye', 'bass'];
  const res = RadashArray._sift(fish);
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;