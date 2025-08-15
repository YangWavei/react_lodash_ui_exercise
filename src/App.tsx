import { Button, ColorPicker, ConfigProvider, Divider, Input, Space } from "antd";
import { useState } from "react";
import Navigation from "./components/Navigation";

function App() {
  const [primary, setPrimary] = useState('#016428');
  return (
    <>
      <Navigation />
      <div className="p-4">
        <ColorPicker showText value={primary} onChange={color => setPrimary(color.toHexString())} />
        <Divider />
        <ConfigProvider
          theme={{
            token: {
              // Seed Token 影响范围大
              colorPrimary: primary,
              // 派生变量，影响范围小
              // colorBgContainer: '#f6ffed'
            }
          }}>
          <Space>
            <Input type="text" placeholder="请输入" />
            <Button type="primary">Primary</Button>
          </Space>

          <Divider />
          <Space>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#933b65'
                }
              }}>
              <Button type="primary">Theme 2</Button>
            </ConfigProvider>
          </Space>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;