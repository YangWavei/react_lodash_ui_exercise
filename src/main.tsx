import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from "antd";
import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css";

const root = document.getElementById("root")!;
createRoot(root).render(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: '#49cc90',
        // 派生变量，影响范围小
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <App />
  </ConfigProvider>

);