// import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

export const selectProducts = state => state.products.items;
export const selectFilterValue = state => state.filter;
export const selectProductId = state => state.products.productId;

export const selectCategories = state => state.products.categories;

// export const selectVisibleProducts = createSelector(
//   [selectProducts, selectFilterValue],
//   (products, filter) => {
//     // const normalizedFilter = filter.toLowerCase();
//     return products.filter(({ title }) => title.includes(filter));
//   }
// );
