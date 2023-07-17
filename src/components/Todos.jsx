import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <div className="Todos">
      <h1>일정 관리</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todos;
