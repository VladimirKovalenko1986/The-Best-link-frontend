import { createSlice } from "@reduxjs/toolkit";
import { fetchLinks, addLink, deleteLink } from "./operations.js";
import { logOut } from "../auth/operations.js";
// import { selectTextFilter } from "../filtersSlice.js";

const slice = createSlice({
  name: "links",
  initialState: {
    items: [],
    loading: false,
    error: null,
    modal: {
      isOpen: false,
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.modalLinkId = action.payload; // Передаємо _id посилання
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.modalLinkId = null;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
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
        state.error = null;
      })
      .addCase(addLink.fulfilled, (state, action) => {
        state.items.push(action.payload.data);
        state.error = null;
        state.loading = false;
      })
      .addCase(addLink.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteLink.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteLink.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload.id
        );
        state.error = null;
        state.loading = false;
      })
      .addCase(deleteLink.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
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

export const { openModal, closeModal } = slice.actions;
export default slice.reducer;
