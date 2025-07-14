import { useState } from "react";
import { Button } from "antd";
type Pattern = 'edit' | 'view'
/** 个人信息编辑 */
export default function EditProfile() {
  const [pattern, setPattern] = useState<Pattern>('edit')

  const [firstName, setFirstName] = useState('')

  const [lastName, setLastName] = useState('')

  const handlePatternSwitch = (p: Pattern) => {
    if (p === 'edit') {
      setPattern('view')
    } else if (p === 'view') {
      setPattern('edit')
    }
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  return (
    <form>
      {/* 编辑模式下显示可编辑内容，否则只显示结果 */}
      {
        pattern === 'edit' && (
          <>
            <label>
              First name:{' '}
              <b>Jane</b>
              <input onChange={handleFirstNameChange} className="border-2 border-red-500 outline-none" />
            </label>
            <label>
              Last name:{' '}
              <b>Jacobs</b>
              <input onChange={handleLastNameChange} className="border-2 border-red-500 outline-none" />
            </label>
            <button className="bg-sky-300" type="submit">
              Edit Profile
            </button>
          </>)
      }
      <p><i>Hello, {firstName} {lastName}!</i></p>
      <Button type="primary" onClick={() => handlePatternSwitch(pattern)}>
        切换模式
      </Button>
    </form>
  );
};
