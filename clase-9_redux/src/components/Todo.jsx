import React, { useState, useRef, useEffect } from "react";
import {
  completeTodo,
  deleteTodo,
  turnEditMode,
  editTodo,
} from "../actions/todoActions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editInputValue, seteditInputValue] = useState(todo.label);
  const myInput = useRef(null);
  useEffect(() => {
    todo.editMode && myInput.current.focus();
  }, [todo.editMode]);

  const dispatch = useDispatch();
  // console.log(todo.id);

  const checkedHandler = () => dispatch(completeTodo(todo.id));

  const clickHandler = () => dispatch(deleteTodo(todo.id));

  const editmodeHandler = () => dispatch(turnEditMode(todo.id));

  const editTodoHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodo(todo.id, editInputValue));
      dispatch(turnEditMode(todo.id));
    }
  };

  const onBlurHandler = () => {
    dispatch(editTodo(todo.id, editInputValue));
    dispatch(turnEditMode(todo.id));
  };

  return (
    <li className={todo.complete ? "todos-complete" : ""}>
      <input
        type="checkbox"
        checked={todo.complete ? true : false}
        onChange={checkedHandler}
        id={todo.id}
      />
      {todo.editMode ? (
        <input
          ref={myInput}
          type="text"
          onBlur={onBlurHandler}
          onKeyPress={editTodoHandler}
          value={editInputValue}
          onChange={(e) => seteditInputValue(e.target.value)}
        />
      ) : (
        <label htmlFor={todo.id} onDoubleClick={editmodeHandler}>
          {todo.label}
        </label>
      )}

      <button type="buttom" onClick={clickHandler}></button>
    </li>
  );
};

export default Todo;
