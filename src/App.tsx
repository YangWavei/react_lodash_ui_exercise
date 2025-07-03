import Avatar from './components/Avatar';
import Bar from './components/Bar';

/** 主组件 */
function App() {
  return (
    <div>
      <Bar />
      <Avatar name='张三' age={20} sex={1} />
    </div>
  );
}

export default App;
