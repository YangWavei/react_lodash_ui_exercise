import * as RadashArray from './util';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = RadashArray._shift(arr, 3);
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen">

    </div>
  );
}
export default App;