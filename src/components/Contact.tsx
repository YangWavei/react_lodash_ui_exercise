import { useState } from "react";
import { Button } from "antd";
import { contacts } from "../data";

interface I_ContactsParams {
  contact: (typeof contacts)[number]
}

export default function Contact({ contact }: I_ContactsParams) {
  const [expanded, setExpanded] = useState(false)
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <Button type="primary" onClick={() => setExpanded(!expanded)}>
        {expanded ? '隐藏' : '显示'} 邮箱
      </Button>
    </>
  )

};

