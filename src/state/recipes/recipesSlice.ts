import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../constants/status';
import { getRecipesListApi } from '../../services/recipes/RecipesService';

const initialState: RecipesState = {
  recipesList: {
    recipes: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  status: STATUS.success,
};

export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipesList = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

type RecipesState = {
  recipesList: RecipesList;
  status: STATUS;
};

export const getRecipesListAction = createAsyncThunk(
  'module/getRecipesListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRecipesListApi();
      if (response.status !== 200) {
        throw new Error('ServerError!');
      }
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Unknown error occurred');
      }
    }
  },
);

const recipesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getRecipesListAction.fulfilled, (state, action) => {
      state.recipesList = action.payload;
      state.status = STATUS.success;
    });

    builder.addCase(getRecipesListAction.pending, (state) => {
      state.status = STATUS.loading;
    });

    builder.addCase(getRecipesListAction.rejected, (state) => {
      state.status = STATUS.error;
    });
  },
});

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
