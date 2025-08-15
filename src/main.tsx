import '@ant-design/v5-patch-for-react-19';
import { createRoot } from "react-dom/client";
import App from './App';
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // 严格模式会调用每个组件函数2次 有助于找出违反规则的组件
  <App />
);
