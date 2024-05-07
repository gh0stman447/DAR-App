import { configureStore } from '@reduxjs/toolkit';
import recipesReducer, { changingFiltersMiddleware } from './recipes/recipesSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(changingFiltersMiddleware.middleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
