import ListRender from "./components/ListRender";
import PeopleList from "./components/PeopleList";

/** 主组件 */
function App() {
  const people = [{
    id: 0,
    name: '凯瑟琳·约翰逊',
    profession: '数学家',
  }, {
    id: 1,
    name: '马里奥·莫利纳',
    profession: '化学家',
  }, {
    id: 2,
    name: '穆罕默德·阿卜杜勒·萨拉姆',
    profession: '物理学家',
  }, {
    id: 3,
    name: '珀西·莱温·朱利亚',
    profession: '化学家',
  }, {
    id: 4,
    name: '苏布拉马尼扬·钱德拉塞卡',
    profession: '天体物理学家',
  }];

  /** 化学家 */
  const chemists = people.filter(ele => ele.profession === '化学家')

  return (
    <div>
      <img src="/vite.svg" alt="" />
      <img src="/images/react.svg" alt="" />
      <PeopleList peoples={people} />
      {/* 化学家 */}
      <h1 className="text-4xl text-red-500">化学家</h1>
      <PeopleList peoples={chemists} />
      <ListRender />
    </div>
  );
}
// Props是只读的时间快照：每次渲染时都会收到新版本的Props
// 不能修改Props，(React的最大特性就是不可变数据)，当我们需要交互性时，可以设置state
export default App;
