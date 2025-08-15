import { ConfigProvider } from "antd";
import { Outlet } from "react-router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token 影响范围大
          colorPrimary: `#de79d3`,
          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed'
        }
      }}>
      <Outlet />
    </ConfigProvider>
  );
}

export default App;