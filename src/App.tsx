import * as radashArray from './util';

const value = radashArray._iterate(
  4,
  (acc, idx) => acc + idx,
  0
);

console.log("🚀 ~ value:", value);

function App() {
  return (
    <div className="w-screen h-screen  bg-yellow-50/60">
      测试 radash
    </div>
  );
}
export default App;
