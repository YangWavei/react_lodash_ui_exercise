import type React from "react"

function Signup() {
  return (
    <form onSubmit={(e: React.FormEvent) => {
      e.preventDefault()
      alert(`提交表单`)
    }}>
      <input type="text" />
      {/* 提交表单后的默认行为是刷新页面，需要阻止默认事件 */}
      <button type="submit">提交表单</button>
    </form>
  )
}

export default Signup
