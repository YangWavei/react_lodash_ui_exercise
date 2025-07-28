import {
  arrayCommonMethod,
  groupByLength,
  findActiveUser,
  users,
  splitSentences,
  processProducts,
  products
} from "./Algorithm/chapter_array_and_linkedlist/array";
function App() {
  arrayCommonMethod()
  // 准确判断一个数据的类型
  console.log(groupByLength(['ts', 'node', 'deno', 'Java', 'JavaScript']));
  console.log(findActiveUser(users)?.name);
  console.log(splitSentences(['Web开发 工程实践', 'TS 强类型']));
  console.log(processProducts(products, 0.14));
  return (
    <div className="w-screen h-[30px] bg-sky-300 flex justify-center items-center">Algorithm</div>
  )
};
export default App;
