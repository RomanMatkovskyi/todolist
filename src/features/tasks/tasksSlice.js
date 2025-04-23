import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      const elementIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (elementIndex !== -1) {
        state.tasks.splice(elementIndex, 1);
      }
    },
  },
});

export const { addTask, toggleComplete, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
