import {
  ADD_TODO,
  CLEAR_COMPLETE,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_MODE,
  EDIT_TODO,
} from "../actions/actionTypes";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
      // eslint-disable-next-line no-case-declarations
      let stateAdded = state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      return stateAdded;
    case EDIT_MODE:
      // eslint-disable-next-line no-case-declarations
      let stateEditMode = state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            editMode: !item.editMode,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      return stateEditMode;
    case EDIT_TODO:
      // eslint-disable-next-line no-case-declarations
      let stateEditTodo = state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            label: action.label,
          };
        } else {
          return {
            ...item,
          };
        }
      });
      return stateEditTodo;

    case DELETE_TODO:
      // eslint-disable-next-line no-case-declarations
      let newstate = state.filter((item) => item.id !== action.id);

      return newstate;

    case CLEAR_COMPLETE:
      // eslint-disable-next-line no-case-declarations
      let nonClear = state.filter((item) => !item.complete);

      return nonClear;

    default:
      return state;
  }
};
