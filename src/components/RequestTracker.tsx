import { Button } from "antd";
import { useState } from "react";

/** 修复请求计数器 */
function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    // 等待计数器
    setPending(pen => pen + 1);
    await delay(2000);
    setPending(pen => pen - 1);
    setCompleted(com => com + 1);
  }

  return (
    <>
      <h3>
        等待：{pending}
      </h3>
      <h3>
        完成：{completed}
      </h3>
      <Button type="primary" onClick={handleClick}>
        购买
      </Button >
    </>
  );
}


export default RequestTracker;

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
