/** 打包列表组件 */
function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item name="去旅行" isPacked={true} />
        <Item name="去work" isPacked={false} />
        <Item name="去吃饭" isPacked={true} />
      </ul>
    </section>
  )
}

interface ItemParamsType {
  isPacked: boolean,
  name: string
}

function Item({ name, isPacked }: ItemParamsType) {
  // 使用?: 三目运算符进行条件渲染
  // return <li key={name}> {isPacked ? (<del>{' ✅ ' + name} </del>) : name}</li>
  // 使用&& 与运算符进行条件渲染 当条件为True时，渲染后面的内容
  // return <li key={name}>{isPacked && ' ✅ '} {name}</li>
  /* -------------------------------------------------------------------------- */

  // 选择性的将TSX赋值给变量
  let itemContent = <div className=" bg-sky-400">{name}</div>
  if (isPacked) {
    itemContent = <h1 className=" text-[30px] text-red-600">{' ✅ ' + name}</h1>
  }

  return (
    <ul>
      <li><li className="item">{itemContent}</li></li>
      {/* 这样的话它就不仅仅使用于文本，任意的JSX元素均适用 */}
      {itemContent}
    </ul>)
}

export default PackingList


