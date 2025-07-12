import type React from "react"
import { useState } from "react"

function Form() {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('')

  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }

  function sendMessage(message: string) {
    // ...
  }
  return (
    <form onSubmit={(e: React.FormEvent) => {
      e.preventDefault()
      setIsSent(true)
      sendMessage(message)
    }}>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}>

      </textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
