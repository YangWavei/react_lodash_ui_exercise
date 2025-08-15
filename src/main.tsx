import '@ant-design/v5-patch-for-react-19';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from './router';

const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
