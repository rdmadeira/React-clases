import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
  };
  return (
    <form className="todos-form" name="todos" onSubmit={submitHandle}>
      <input
        type="text"
        placeholder="Que vas hacer Rey????"
        name="todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <small>Escribi algo KING!!!!</small>
    </form>
  );
};

export default TodoForm;
