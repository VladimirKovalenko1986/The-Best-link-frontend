import { createSlice } from "@reduxjs/toolkit";
import { fetchLinks, addLink, deleteLink } from "./operations.js";
// import { selectTextFilter } from "../filtersSlice.js";

const slice = createSlice({
  name: "links",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addLink.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLink.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = null;
        state.loading = false;
      })
      .addCase(addLink.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteLink.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = null;
        state.loading = false;
      })
      .addCase(deleteLink.rejected, (state, action) => {
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
