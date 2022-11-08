import React from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { clearComplete } from "../actions/todoActions";
import { useSelector, useDispatch } from "react-redux";

const Todopages = () => {
  const todoList = useSelector((state) => state.todoList); // se usa para pescar (GET) el estado global de store
  const dispatch = useDispatch();
  const completes = todoList.filter((item) => item.complete === true);

  const delCompletedHandler = () => {
    dispatch(clearComplete());
  };
  return (
    <>
      <div className="todos">
        <div className="todos-header">
          <h3 className="todos-title">TODO LIST</h3>
          <div>
            <p>
              Tienes{" "}
              <span className="todos-count">
                {todoList.length - completes.length}
              </span>{" "}
              Items por hacer!!{" "}
            </p>
            {completes.length > 0 ? (
              <button
                type="button"
                className="todos-clear"
                onClick={delCompletedHandler}
              >
                Borra Completados
              </button>
            ) : null}
          </div>
        </div>
        <TodoForm />
        <TodoList todos={todoList} />
      </div>
    </>
  );
};

export default Todopages;
