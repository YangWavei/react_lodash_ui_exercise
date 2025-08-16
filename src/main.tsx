import '@ant-design/v5-patch-for-react-19';
import { App, ConfigProvider } from "antd";
import { createRoot } from 'react-dom/client';
import RootApp from './App';
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
    {/* antd 的 App 包裹组件，用于提供可消费 React context 的 message.xxx、Modal.xxx、notification.xxx 的静态方法 */}
    <App>
      <RootApp />
    </App>
  </ConfigProvider>

);