import Avatar from './components/Avatar';

/** 主组件 */
function App() {
  return (
    <div>
      <div className='w-[100px] h-[100px]'>嗨嗨</div>
      <Avatar name='张三' age={20} sex={1} />
    </div>
  );
}

export default App;
