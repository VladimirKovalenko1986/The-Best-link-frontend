import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations.js";
// import { selectTextFilter } from "../filtersSlice.js";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = null;
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

// export const selectVisibleTasks = createSelector(
//   [selectTasks, selectTextFilter],
//   (tasks, textFilter) => {
//     return tasks.filter((task) =>
//       task.text.toLowerCase().includes(textFilter.toLowerCase())
//     );
//   }
// );

export default slice.reducer;
