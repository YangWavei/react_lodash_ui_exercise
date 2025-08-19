import { addTodo, removeTodo, setFilter, store, toggleDone } from "@/store";
import { Button, Flex, Input, Radio, type InputRef, type RadioChangeEvent } from "antd";
import clsx from "clsx";
import { CircleCheckBig, ListChecks, LoaderPinwheel } from "lucide-react";
import { useRef } from "react";
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
              <span onClick={() => toggleDone(id, status)} data-status={status} className={clsx("text-[2em] font-bold cursor-pointer", (status === 'completed') && 'line-through')}>
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

  const onChange = (e: RadioChangeEvent) => {
    // 直接使用事件中的值来设置过滤器
    setFilter(e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={snap.filter} // 使用 store 中的 filter 状态
      options={[
        {
          value: 'pending',
          className: 'option-1',
          label: (
            <Flex gap="small" justify="center" align="center" vertical>
              <CircleCheckBig />
              待办
            </Flex>
          ),
        },
        {
          value: 'completed',
          className: 'option-2',
          label: (
            <Flex gap="completed" justify="center" align="center" vertical>
              <ListChecks />
              已完成
            </Flex>
          ),
        },
        {
          value: 'all',
          className: 'option-3',
          label: (
            <Flex gap="all" justify="center" align="center" vertical>
              <LoaderPinwheel />
              所有
            </Flex>
          ),
        },
      ]}
    />
  );
};

export const CreateTodo = () => {
  const inputRef = useRef<InputRef>(null);

  return (
    <section className="flex gap-2">
      <Input type="text" name="description" minLength={2} ref={inputRef} style={{ maxWidth: 250 }} />
      <Button type="primary" onClick={() => addTodo(inputRef.current?.input?.value ?? '')}>Add new</Button>
    </section>
  );
};
