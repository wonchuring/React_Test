import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item }) => {
  const { id, text, isChk } = item;
  const { onDel, onToggle } = useContext(TodoContext);
  return (
    <li style={{ color: isChk ? "skyblue" : "#000", textDecoration: isChk ? "line-through" : "" }}>
      <input type="checkbox" checked={isChk} onChange={() => onToggle(id)} />
      {text}
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
