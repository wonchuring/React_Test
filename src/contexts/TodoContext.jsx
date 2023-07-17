import { useRef, useMemo, useContext, useState, createContext } from "react";
import { apiData } from "../assets/api/data";

export const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);
const TodoProvider = (props) => {
  const [data, setData] = useState(apiData);
  const [text, setText] = useState("");
  const no = useRef(data.length + 1);

  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const onToggle = (id) => {
    setData(data.map((item) => (item.id === id ? { ...item, isChk: !item.isChk } : item)));
  };

  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: no.current++,
        text,
        isChk: false,
      },
    ]);
    setText("");
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const value = useMemo(() => ({ data, onDel, onToggle, onAdd, changeInput, no, text }), [data, onDel, onToggle, onAdd, changeInput, no, text]);
  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
};

export default TodoProvider;
