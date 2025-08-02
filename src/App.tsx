import { _findLastIndex } from "./util";

function App() {
  const users = [
    { user: "barney", active: true },
    { user: "fred", active: false },
    { user: "pebbles", active: false },
  ];
  console.log(_findLastIndex(users, (o) => o.user === "pebbles"));
  console.log(_findLastIndex(users, { user: "barney", active: true }));
  console.log(_findLastIndex(users, ["active", false]));
  console.log(_findLastIndex(users, "active"));

  return <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>;
}
export default App;
