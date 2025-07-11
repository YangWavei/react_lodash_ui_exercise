import { Button } from "antd";

function MyButton() {

  const handleClick = () => {
    console.log(`点击了按钮！`);
  }
  
  return (
    <>
      <Button onClick={handleClick} >
        未绑定任何事件的按钮
      </Button>
    </>
  )
}

export default MyButton
