export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

export const selectProducts = state => state.products.items;
export const selectFilterValue = state => state.filter;
export const selectProductId = state => state.products.productId;

export const selectCategories = state => state.products.categories;
