import * as RadashArray from './util';

function App() {

  const names = ['ra', 'zeus', 'loki', '1ia', 'sa1'];
  const cultures = ['egypt', 'greek'];
  const res = RadashArray._zip(names, cultures);
  console.log("🚀 ~ App ~ res:", res);

  return (
    <div className="w-screen h-screen bg-red-300/20">

    </div>
  );
}
export default App;