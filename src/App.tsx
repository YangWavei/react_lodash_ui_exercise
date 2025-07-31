import {
  _chunk, _chunk2, _chunk3, _chunk4,
  _compact, _compact2, _compact3,
  _concat,
  _difference, _difference2, _difference3,
  _differenceBy,
  _drop,
  _dropRight,
  _dropRightWhile
} from "./util";

type User = {
  user: string,
  active: boolean
}

function App() {

  // 测试用例1: 基本用法 - 根据对象属性过滤
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
  // 移除从右到左所有active为false的元素
  console.log(_dropRightWhile<User>(users, value => !value.active));

  return (
    <div className="w-screen h-[30px] font-bold flex justify-center items-center">Lodash</div>
  )
};
export default App;
