import { useState } from "react";
import { contacts } from "./data";
import Contact from "./components/Contact";

/** 主组件 */
function App() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        以相反的顺序显示
      </label>
      <ul>
        {/* 让state 与每个特定的联系人 相联系
          使用联系人id 作为 `key` 就可以修复中状态被重置的问题
          state 与树中的位置相关联，key 让你可以指定一个特定的位置，而不依赖于顺序
        */}
        {displayedContacts.map(contact =>
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>

    </>
  )
}
export default App;
