import type { ReactNode } from "react";

/** 茶具套装 */
function TeaGathering() {
  const cups: ReactNode[] = []
  for (let i = 0; i <= 12; i++) {
    cups.push(<Cups guest={i} key={i} />)
  }
  return cups
}

function Cups({ guest }: { guest: number }) {
  return <h2>Tea Cup for guest #{guest}</h2>
}

export default TeaGathering
