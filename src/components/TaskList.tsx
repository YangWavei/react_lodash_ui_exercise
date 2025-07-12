import { useState } from 'react';
import { initialTodos } from '../data';
import { Button } from 'antd';

type TodosType = typeof initialTodos;

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo
}: {
  todos: TodosType
  onChangeTodo: any
  onDeleteTodo: any
}) {
  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChange={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }: {
  todo: TodosType[number], onChange: any, onDelete: any
}) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
          }} />
        <Button type='primary' onClick={() => setIsEditing(false)}>
          保存
        </Button >
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <Button type='primary' onClick={() => setIsEditing(true)}>
          编辑
        </Button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      />
      {todoContent}
      <Button type='primary' danger onClick={() => onDelete(todo.id)}>
        删除
      </Button >
    </label>
  );
}
