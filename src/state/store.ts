import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
