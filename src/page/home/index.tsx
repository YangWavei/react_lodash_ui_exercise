import { App, Button, Space } from "antd";

export default function Index() {
  const { message, modal, notification } = App.useApp();

  const handleOpenMessage = () => {
    message.success('Success!');
  };

  const handleOpenModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const handleOpenNotification = () => {
    notification.info({
      message: 'notification topLeft',
      description: 'Hello,Ant Design',
      placement: 'topLeft'
    });
  };

  return (
    <div>
      <Space wrap>
        <Button type="primary" onClick={handleOpenMessage}>Open Message</Button>
        <Button type="primary" onClick={handleOpenModal}>Open Modal</Button>
        <Button type="primary" onClick={handleOpenNotification}>Open notification</Button>
      </Space>
    </div>
  );
};