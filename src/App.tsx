import {
  _chunk,
  _chunk2,
  _chunk3,
  _chunk4,
  _compact,
  _compact2,
  _compact3,
  _concat,
  _difference,
  _difference2,
  _difference3,
  _differenceBy,
  _drop,
  _dropRight,
  _dropRightWhile,
  _fill,
  _findIndex,
} from "./util";

function App() {
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];
  console.log(_findIndex(users, (o) => o.user === "barney"));
  console.log(_findIndex(users, { user: "fred", active: false }));
  console.log(_findIndex(users, ["active", false]));
  console.log(_findIndex(users, "active"));

  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
