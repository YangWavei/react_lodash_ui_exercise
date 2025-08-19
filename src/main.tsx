import '@ant-design/v5-patch-for-react-19';
import { App, ConfigProvider, theme } from "antd";
import { createRoot } from 'react-dom/client';
import RootApp from './App';
import { useToggleMode } from './hooks/useToggleMode';
import "./index.css";

// 创建一个包装组件来动态控制主题
const ThemedApp = () => {
  const { isDark } = useToggleMode();

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          // colorPrimary: '#49cc90',
          // // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed',
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      {/* antd 的 App 包裹组件，用于提供可消费 React context 的 message.xxx、Modal.xxx、notification.xxx 的静态方法 */}
      <App>
        <RootApp />
      </App>
    </ConfigProvider>
  );
};

const root = document.getElementById("root")!;
createRoot(root).render(<ThemedApp />);