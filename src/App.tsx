import { ZButton } from "./components";

const generateRandomColor = () => {
  // 生成 0-255 的随机数
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  // 转换为16进制并确保是两位数 padStart() 方法用于从开头填充字符串至指定长度
  const red = randomRed.toString(16).padStart(2, '0');
  const green = randomGreen.toString(16).padStart(2, '0');
  const blue = randomBlue.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
};

function App() {
  const handleCreateRandomBgColor = () => {
    generateRandomColor();
  };

  return (
    <div className="w-screen h-screen baseFontFamily">
      <button>你好</button>
      <ZButton onClick={handleCreateRandomBgColor}>Button</ZButton>
    </div>
  );
}

export default App;