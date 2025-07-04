import { people } from "../data/index";
import { getImageUrl } from "../utils/getImageUrl";
/** 列表渲染 */
function ListRender() {
  /** 科学家列表 */
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        因{person.accomplishment}而闻名世界
      </p>
    </li>
  );
  return <>
    <article>
      <h1>科学家</h1>
      <ul>{listItems}</ul>
    </article>
  </>
}

export default ListRender
