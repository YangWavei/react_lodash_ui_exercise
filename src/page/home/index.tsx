import { useToggleMode } from "@/hooks/useToggleMode";
import { Button } from "antd";
import { CreateTodo, Filters, Todos } from "./Todo/todo";

export default function Home() {
  const { toggleMode } = useToggleMode();
  return (
    <div>
      <div className="w-full h-[80px] bg-red-500/20 text-[30px]  dark:text-white/80">
        Home
      </div>
      <Button onClick={toggleMode}>mode toggle</Button>
      <main>
        <h1 className="">
          To-do List{" "}
          <span role="img" aria-label="pen">
            ✏️
          </span>
        </h1>
        <Filters />
        <Todos />
        <CreateTodo />
      </main>
    </div>
  );
};