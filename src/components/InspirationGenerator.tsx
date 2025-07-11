import { useState, type ReactNode } from "react";
import inspirations from "../data/inspirations";
import FancyText from "./FancyText";
import Color from "./Color";
import { Button } from 'antd'

function InspirationGenerator({ children }: { children?: ReactNode }) {
  const [index, setIndex] = useState(0)
  const inspiration = inspirations[index]
  const next = () => setIndex((index + 1) % inspirations.length)
  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {
        inspiration.type === 'quote'
          ? <FancyText text={inspiration.value} />
          : <Color value={inspiration.value} />
      }
      <Button onClick={next}>Inspire me again!</Button>
      {children}
    </>
  )
}

export default InspirationGenerator
