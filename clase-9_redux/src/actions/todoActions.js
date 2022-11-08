import * as types from "./actionTypes";
import { todoGenerator } from "../models/Todo";

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: todoGenerator(text),
});

export const completeTodo = (id) => ({
  type: types.COMPLETE_TODO,
  id: id,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id: id,
});

export const clearComplete = () => ({
  type: types.CLEAR_COMPLETE,
});

export const turnEditMode = (id) => ({
  type: types.EDIT_MODE,
  id: id,
});

export const editTodo = (id, label) => ({
  type: types.EDIT_TODO,
  id,
  label,
});
