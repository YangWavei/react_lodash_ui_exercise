import { CreateTodo, Filters, Todos } from "./Todo/todo";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[80px] bg-red-500/20 text-[30px]">
        Home
      </div>
      <main>
        <h1>
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