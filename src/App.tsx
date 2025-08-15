import { useState } from "react";
import { ZButton, ZModal } from "./components";

function App() {
  const [visible, setVisible] = useState(false);
  const handleConfirm = () => {
    // other logic ...
    setVisible(false);
  };
  const handleCancel = () => {
    // other logic ...
    setVisible(false);
  };

  return (
    <div className="w-screen h-screen">
      <ZButton onClick={() => setVisible(true)}>open</ZButton>
      <ZModal visible={visible} onCancel={handleCancel} onOk={handleConfirm}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ZModal>
    </div>
  );
}

export default App;