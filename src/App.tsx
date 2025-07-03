import Avatar from './components/Avatar';

/** 主组件 */
function App() {
  return (
    <div>
      <div className='w-[100px] h-[100px] bg-sky-500'></div>
      <Avatar name='张三' age={20} sex={1}>
        <div className=' text-[red]'>我是children属性传递的内容 ReactNode</div>
      </Avatar>
    </div>
  );
}

export default App;
