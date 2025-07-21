import type { RefObject } from "react"

interface I_SearchInput {
  sonRef: RefObject<HTMLInputElement | null>
}

export default function SearchInput({ sonRef }: I_SearchInput) {
  return <input ref={sonRef} type="text" placeholder="请输入内容" className="outline-none border-1 border-[#000] focus:border-[red]" />
};
