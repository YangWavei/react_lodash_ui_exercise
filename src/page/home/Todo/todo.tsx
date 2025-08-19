import { addTodo, filterValues, removeTodo, setFilter, store } from "@/store";
import { Button, Input, type InputRef } from "antd";
import clsx from "clsx";
import { useRef } from "react";
import { Fragment } from "react/jsx-runtime";
import { useSnapshot } from "valtio";

export function Todos() {
  // To access the data in the store,we'll use `useSnapshot`
  const snap = useSnapshot(store);
  return (
    <ul>
      {snap.todos.filter(({ status }) => status === snap.filter || snap.filter === 'all')
        .map(({ description, status, id }) => {
          return (
            <li key={id} className="w-[200px] border border-[red] mb-2 flex items-center justify-between">
              <span data-status={status} className={clsx("text-[2em] font-bold", (status === 'completed') && 'line-through')}>
                {description}
              </span>
              <Button type="primary" danger onClick={() => removeTodo(id)}>x</Button>
            </li>
          );
        })}
    </ul>
  );
};

export const Filters = () => {
  const snap = useSnapshot(store);
  return (
    <nav>
      {
        filterValues.map(f => (
          <Fragment key={f}>
            <input type="radio" name="filter" value={f} checked={snap.filter === f} onChange={() => setFilter(f)} />
            <label>{f}</label>
          </Fragment>
        ))
      }
    </nav>
  );

};

export const CreateTodo = () => {
  const inputRef = useRef<InputRef>(null);

  return (
    <section>
      <Input type="text" name="description" minLength={2} ref={inputRef} />
      <Button type="primary" onClick={() => addTodo(inputRef.current?.input?.value ?? '')}>Add new</Button>
    </section>
  );
};
