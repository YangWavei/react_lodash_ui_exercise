import { useState } from "react";
import Field from "./components/Field";

/** 主组件 */
function App() {
  const [reverse, setReverse] = useState(false);

  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      调换顺序
    </label>
  );
  // React 使用 `key` 来识别和复用组件实例，当前Field组件使用的`key`是固定的，所以切换顺序时 React会
  // 复用相同的组件实例，保留其内部状态
  if (reverse) {
    return (
      <>
        <Field label="姓氏" key={`F-Name`} />
        <Field label="名字" key={`Name`} />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="名字" key={`Name`} />
        <Field label="姓氏" key={`F-Name`} />
        {checkbox}
      </>
    );
  }
}
export default App;
