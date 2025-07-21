import { useRef } from "react";
import { Button } from "antd";
import SearchInput from "./SearchInput";

export default function SearchButton() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus()
  }
  return (
    <nav>
      <Button type="primary" onClick={handleClick}>搜索</Button>
      <SearchInput sonRef={inputRef} />
    </nav>
  )
};
