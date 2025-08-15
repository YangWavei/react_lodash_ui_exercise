import { Button, DatePicker } from "antd";
import type { FC } from "react";
interface I_HomeProps {

}

const Home: FC<I_HomeProps> = () => {
  return (
    <div>
      <Button type="primary">你好</Button>
      <DatePicker />
    </div>
  );
};
export default Home;