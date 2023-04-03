// import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.items;

export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectFilterValue = state => state.filter;

// export const selectVisibleProducts = createSelector(
//   [selectProducts, selectFilterValue],
//   (products, filter) => {
//     const normalizedFilter = filter;
//     //   .toLowerCase();
//     return products.filter(({ name }) =>
//       name
//         // .toLowerCase()
//         .includes(normalizedFilter)
//     );
//   }
// );
