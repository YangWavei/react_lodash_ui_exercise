import { people } from "../data/index";
import type { PeopleItemType } from "../types";
import { getImageUrl } from "../utils/getImageUrl";

const chemists: PeopleItemType[] = []
const everyoneElse: PeopleItemType[] = []

// tag 使用foreach构造2个数组替换2次的 `filter` 计算
// 这种做法 将2次 `filter` 替换成了一个只需要进行一次检查就能构造
// 2个数组的循环，节省了计算开销
people.forEach(ele => {
  if (ele.profession === '化学家') {
    chemists.push(ele)
  } else {
    everyoneElse.push(ele)
  }
})


/** 列表渲染 */
function ListRender() {
  /**列表 */
  // done 将列表一分为二
  // const chemists = people.filter(person => person.profession === '化学家')

  // const otherScients = people.filter(person => person.profession !== '化学家')

  return <> 
    <article>
      <ul>
        {/* 实际上React不在乎你数组数据哪来的 */}
        <ScientistCard persons={chemists} title="化学家" />
      </ul>
      <hr />
      <ScientistCard persons={everyoneElse} title="其它科学家" />
    </article>
  </>
}

export default ListRender

// 将 ScientistCard 组件改为明确的 props 接收方式，而不是使用展开运算符
function ScientistCard({ persons, title }: { persons: PeopleItemType[], title: string }) {

  const personList = persons.map(ele =>
    <li key={ele.id}>
      <img
        src={getImageUrl(ele)}
        alt={ele.name}
      />
      <p>
        <b>{ele.name}:</b>
        {' ' + ele.profession + ' '}
        因{ele.accomplishment}而闻名世界
      </p>
    </li>
  )

  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <ul>
        {personList}
      </ul>
    </>
  )
}
