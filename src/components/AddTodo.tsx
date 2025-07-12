import { Button, Input } from 'antd';
import { useState } from 'react';

interface AddTodoParamsType {
  onAddTodo: (n: string) => void
}

/**
 * AddTodo组件 - 用于添加新的待办事项
 *
 * @param {AddTodoParamsType} props - 组件参数
 * @param {Function} props.onAddTodo - 添加待办事项的回调函数，接收新事项的标题作为参数
 * @returns {JSX.Element} - 返回包含输入框和添加按钮的React组件
 */
export default function AddTodo({ onAddTodo }: AddTodoParamsType) {
  // 使用useState管理输入框的标题状态
  const [title, setTitle] = useState('');
  
  return (
    <>
      {/* 包含输入框和按钮的容器 */}
      <div className='flex w-[400px] gap-2'>
        <Input
          placeholder="Add todo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {/* 点击按钮时清空输入框并调用onAddTodo回调 */}
        <Button onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}>添加</Button>
      </div>
    </>
  )
}
