import { Spin } from "antd";
import { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./router";

const MyLoading = () => {
  const [spinning, setSpinning] = useState(false);
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    // 只有在延迟时间过后才显示spinner，避免页面快速加载时的闪烁
    const delayTimer = setTimeout(() => {
      setDelayPassed(true);
      setSpinning(true);
    }, 300);

    // 如果超过一定时间（例如10秒）仍在加载，隐藏spinner避免让用户感到困惑
    const maxTimer = setTimeout(() => {
      setSpinning(false);
    }, 10000);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Spin
        spinning={spinning}
        size="large"
        tip={delayPassed ? "加载中..." : undefined}
      >
        <div className="p-10" />
      </Spin>
    </div>
  );
};

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<MyLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;