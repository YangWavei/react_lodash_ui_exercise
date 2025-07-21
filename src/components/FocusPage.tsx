import { Button } from "antd";
import { useRef } from "react";

export default function FocusPage() {
  const focusRef = useRef<HTMLInputElement>(null);
  return (
    <nav>
      <Button onClick={() => focusRef.current?.focus()}>搜索</Button>
      <input ref={focusRef} placeholder="找什么呢" />
    </nav>
  )
};
