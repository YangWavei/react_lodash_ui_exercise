import { useState } from "react"
import { Input } from "antd";
interface I_FieldParams {
  label: string
}

export default function Field({ label }: I_FieldParams) {
  const [text, setText] = useState('')
  return (
    <label>
      {label}：
      <Input
        style={{ width: '200px' }}
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  )
};
