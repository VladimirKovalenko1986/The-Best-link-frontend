export const selectLinks = (state) => state.links.items;

export const selectLoading = (state) => state.links.loading;

export const selectError = (state) => state.links.error;

export const selectIsOpen = (state) => state.links.modal.isOpen;

export const selectModalLinkId = (state) => state.links.modal.modalLinkId;

export const selectModalType = (state) => state.links.modal.modalType;

export const selectHasNextPage = (state) => state.links.hasNextPage;

export const selectCurrentPage = (state) => state.links.currentPage;

export const selectFilter = (state) => state.links.filter;
