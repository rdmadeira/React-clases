import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({ todoList: todoReducer });

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["todoList"], // es el reducer que queres guardar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export const persistor = persistStore(store);
