import TodoItem from "./TodoItem";
import { useTodo } from "../contexts/TodoContext";

const TodoList = () => {
  const { data } = useTodo();

  return (
    <ul className="TodoList">
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoList;
