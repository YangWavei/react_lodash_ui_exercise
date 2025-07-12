import { useState } from 'react';
import AddTodo from '../components/AddTodo.tsx';
import TaskList from '../components/TaskList.tsx';
import { initialTodos } from "../data/index.js";
import { useImmer } from "use-immer";
let nextId = 3;

export default function TaskApp() {
  // 代办事项
  // const [todos, setTodos] = useState<typeof initialTodos>(initialTodos);
  const [todos, setTodos] = useImmer<typeof initialTodos>(initialTodos);

  /** 添加 */
  function handleAddTodo(title: string) {
    // const newTodos = [...todos, {
    //   id: nextId++,
    //   title: title,
    //   done: false
    // }]
    // setTodos(newTodos)
    setTodos(draft => {
      draft.push({
        id: nextId++,
        title,
        done: false
      })
    })
  }

  /** 编辑 */
  function handleChangeTodo(nextTodo: typeof initialTodos[number]) {
    // setTodos(todos.map(t => {
    //   if (t.id === nextTodo.id) {
    //     return nextTodo
    //   } else {
    //     return t
    //   }
    // }))

    setTodos(draft => {
      draft.forEach((el, index) => el.id === nextTodo.id && (draft[index] = nextTodo))
    })
  }

  /** 删除 */
  function handleDeleteTodo(todoId: number) {
    // const newTodos = todos.filter(t => t.id !== todoId)
    // setTodos(newTodos)
    
    setTodos(draft => {
      // 找到要删除的代办事项的索引
      const index = draft.findIndex(t => t.id === todoId)
      index !== -1 && draft.splice(index, 1)
    })
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
