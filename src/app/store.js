import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterSlice,
  },
});
