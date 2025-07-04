
interface PeopleParamsType {
  id: number,
  name: string,
  profession: string,
}

function PeopleList({ peoples }: { peoples: PeopleParamsType[] }) {

  /** 获得all节点数组 */
  const listItems = peoples.map(ele =>
    (<li className="my-2 border-b-[red] border-b-[1px] w-[600px]" key={ele.id}>{ele.name}</li>))

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default PeopleList
