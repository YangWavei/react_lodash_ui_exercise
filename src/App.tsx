import './App.css'
import Clock from './components/Clock';
/** 主组件 */
function App() {
  return (
    <div className="w-screen h-screen bg-sky-100">
      {/* <div className="banner">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem esse soluta perspiciatis ducimus. Aliquam, provident nisi aspernatur
        rem velit aliquid fuga iste nulla et atque quod ut molestiae, accusamus ratione?
      </div>
      <AnimateDemo /> */}
      <Clock />
    </div>
  );
}
// Props是只读的时间快照：每次渲染时都会收到新版本的Props
// 不能修改Props，(React的最大特性就是不可变数据)，当我们需要交互性时，可以设置state
export default App;
