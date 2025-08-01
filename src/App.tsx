import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2, _difference3,
  _differenceBy,
  _drop,
  _dropRight,
  _dropRightWhile,
  _fill,
  _findIndex
} from "./util";

function App() {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

  console.log(_findIndex(users, function (o) { return o.user === 'barney' }))
  console.log(_findIndex(users, { 'user': 'fred', 'active': false }));
  console.log(_findIndex(users, ['active', false]));
  console.log(_findIndex(users, 'active'));



  interface ObjType {
    name: string,
    age: number
  };
  type A = keyof ObjType;
  // keyof 接受一个对象类型作为参数，返回该对象的所有键名组成的联合类型

  const obj = {
    name: 'hello',
    age: 30
  }
  // 使用 typeof 运算符返回 某个操作数的TS类型
  type B = typeof obj;

  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
