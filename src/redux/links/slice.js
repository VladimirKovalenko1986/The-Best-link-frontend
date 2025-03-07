import { createSlice } from "@reduxjs/toolkit";
import { fetchLinks, addLink, deleteLink, editeLink } from "./operations.js";
import { logOut } from "../auth/operations.js";
// import { selectTextFilter } from "../filtersSlice.js";

const slice = createSlice({
  name: "links",
  initialState: {
    items: [],
    loading: false,
    error: null,
    hasNextPage: false,
    currentPage: 1,
    filter: "",
    modal: {
      isOpen: false,
      modalLinkId: null,
      modalType: null,
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.modalLinkId = action.payload.id;
      state.modal.modalType = action.payload.type;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.modalLinkId = null;
      state.modalType = null;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLinks.fulfilled, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.items = action.payload.data;
        } else {
          state.items = [...state.items, ...action.payload.data];
        }
        state.hasNextPage = action.payload.hasNextPage;
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.error = action.payload.data;
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
      .addCase(editeLink.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editeLink.fulfilled, (state, action) => {
        const updatedLink = action.payload.data;
        const index = state.items.findIndex(
          (item) => item._id === updatedLink._id
        );

        if (index !== -1) {
          state.items[index] = updatedLink;
        }
        state.error = null;
        state.loading = false;
      })
      .addCase(editeLink.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      }),
});

export const { openModal, closeModal, setPage, setFilter } = slice.actions;
export default slice.reducer;
