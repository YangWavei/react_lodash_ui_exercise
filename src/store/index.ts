import store from "store";
import { proxy, subscribe } from "valtio";


type Status = 'pending' | 'completed';
export type Filter = Status | 'all';
type Todo = {
  description: string,
  status: Status,
  id: number;
};

const defaultTodos: Todo[] = [
  {
    id: 1,
    status: 'pending',
    description: 'Todo One',
  },
  {
    id: 2,
    status: 'pending',
    description: 'Todo Two',
  }
];

export const filterValues: Filter[] = ['all', 'pending', 'completed'];

/** 全局状态管理 */
export const todostore = proxy<{ filter: Filter, todos: Todo[]; }>({
  filter: 'all',
  todos: defaultTodos
});

/* -----------------------------actions--------------------------------------------- */
export const addTodo = (description: string) => {
  todostore.todos.push({
    description,
    status: 'pending',
    id: Date.now()
  });
};

export const removeTodo = (id: number) => {
  const index = todostore.todos.findIndex(todo => todo.id === id);
  if (index > -1) {
    todostore.todos.splice(index, 1);
  }
};

export const toggleDone = (id: number, currentStatus: Status) => {
  const nextStatus = currentStatus === 'pending' ? 'completed' : "pending";
  const todo = todostore.todos.find(todo => todo.id === id);
  if (todo) {
    todo.status = nextStatus;
  }
};

export const setFilter = (filter: Filter) => {
  todostore.filter = filter;
};
/* ------------------------------------Dark & Light Mode-------------------------------------- */

// 暗黑模式切换
export const mode = proxy({
  isDark: (() => {
    // 从 store 读取主题偏好，如果没有则默认为 false
    try {
      const themeMode = store.get('theme-mode');
      return themeMode ? JSON.parse(themeMode) : false;
    } catch {
      return false;
    }
  })()
});

// 监听主题变化并持久化到 store
subscribe(mode, () => {
  try {
    store.set('theme-mode', JSON.stringify(mode.isDark));
  } catch (error) {
    console.warn('Failed to save theme preference:', error);
  }
});
