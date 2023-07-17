import React from "react";
import "./assets/css/reset.css";
import "./assets/css/style.scss";
import Todos from "./components/Todos";
import TodoProvider from "./contexts/TodoContext";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

const App = () => {
  return (
    <>
      <AppProvider contexts={[TodoProvider]}>
        <div>
          <Todos />
        </div>
      </AppProvider>
    </>
  );
};

export default App;
