import { proxy } from "valtio";

type Status = 'pending' | 'completed';
type Filter = Status | 'all';
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
export const store = proxy<{ filter: Filter, todos: Todo[]; }>({
  filter: 'all',
  todos: defaultTodos
});

/* -----------------------------actions--------------------------------------------- */
export const addTodo = (description: string) => {
  store.todos.push({
    description,
    status: 'pending',
    id: Date.now()
  });
};

export const removeTodo = (id: number) => {
  const index = store.todos.findIndex(todo => todo.id === id);
  if (index > -1) {
    store.todos.splice(index, 1);
  }
};

export const toggleDone = (id: number, currentStatus: Status) => {
  const nextStatus = currentStatus === 'pending' ? 'completed' : "pending";
  const todo = store.todos.find(todo => todo.id === id);
  if (todo) {
    todo.status = nextStatus;
  }
};

export const setFilter = (filter: Filter) => {
  store.filter = filter;
};
