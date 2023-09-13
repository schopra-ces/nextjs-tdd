import { FaTrash } from "react-icons/fa";
import { ChangeEvent, MouseEvent } from "react";
// import updateTodo from "@/lib/updateTodo"
// import deleteTodo from "@/lib/deleteTodo"
import type { Todo } from "@/types/Todo";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

type Props = {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export default function TodoItem({ todo, setTodos }: Props) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    //const updatedTodo = await updateTodo(todo)
    setTodos((prevTodos) => [
      ...prevTodos.filter((prev) => prev.id !== todo.id),
      { ...todo, title: e.target.value },
    ]);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    //async
    //await deleteTodo(todo)
    setTodos((prev) => [...prev.filter((td) => td.id !== todo.id)]);
  };

  return (
    <article className="my-4 flex justify-between">
      <EditText
        className="text-2xl hover:underline"
        data-testid="todo-item"
        id={todo.id.toString()}
        value={todo.title}
        onChange={handleChange}
        editButtonProps={{ className: "ml-5 w-10 bg-slate-300" }}
        showEditButton
      />
      <button
        data-testid="delete-button"
        onClick={handleDelete}
        className="p-3 text-xl max-w-xs hover:cursor-pointer hover:bg-blue-400"
      >
        <FaTrash />
      </button>
    </article>
  );
}
