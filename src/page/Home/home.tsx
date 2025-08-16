import { Button, DatePicker } from "antd";
import type { FC } from "react";
interface I_HomeProps {

}

const Home: FC<I_HomeProps> = () => {
  return (
    <div>
      <Button type="primary">你好</Button>
      <DatePicker />
      <div className="w-[200px] h-[200px]">测试</div>
    </div>
  );
};
export default Home;