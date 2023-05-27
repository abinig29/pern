import React, { Fragment } from "react";
import "./App.css";

//components

import ListTodos from "./components/ListTodos";
import InputTodo from "./components/InputToDo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
