import {
  PayloadAction,
  createAsyncThunk,
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import { STATUS } from '../../constants/status';
import { getFiltersListApi, getRecipesListApi } from '../../services/recipes/RecipesService';

type field = {
  value: string | null;
  avaible: string[];
};

export const isFiltersNull = (filters: Filters): filters is Filters & Record<keyof Filters, null> =>
  Object.values(filters).every((field) => field.value === null);
export type Filters = {
  cuisine: field;
  mealType: field;
  difficulty: field;
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
  filteredRecipes: Recipe[];
  filters: Filters;
  status: STATUS;
};

const initialState: RecipesState = {
  recipesList: {
    recipes: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  filteredRecipes: [],
  filters: {
    cuisine: { value: null, avaible: [] },
    mealType: { value: null, avaible: [] },
    difficulty: { value: null, avaible: [] },
  },
  status: STATUS.success,
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

export const getFiltersListAction = createAsyncThunk(
  'recipes/getFiltersListAction',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFiltersListApi();
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Unknown error occurred');
      }
    }
  },
);

export const getInitialDataAction = createAsyncThunk(
  'recipes/getInitialDataAction',
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(getFiltersListAction());
    dispatch(getRecipesListAction());
  },
);

export const changingFiltersMiddleware = createListenerMiddleware();

const _applyFilters = (recipes: Recipe[], payload: Filters): Recipe[] => {
  const { cuisine, difficulty, mealType } = payload;
  return recipes.filter((recipe) => {
    let passCuisine = !cuisine?.value || recipe.cuisine === cuisine.value;
    let passDifficulty = !difficulty?.value || recipe.difficulty === difficulty.value;
    let passMealType = !mealType?.value || recipe.mealType.includes(mealType.value);
    return passCuisine && passDifficulty && passMealType;
  });
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    changeFilter: (
      state,
      { payload }: PayloadAction<{ field: keyof Filters; value: field['value'] }>,
    ) => {
      state.filters[payload.field]!.value = payload.value;
    },

    applyFilters: (state) => {
      state.filteredRecipes = _applyFilters(state.recipesList.recipes, state.filters);
    },

    resetFilters: (state) => {
      state.filters.cuisine.value = null;
      state.filters.difficulty.value = null;
      state.filters.mealType.value = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRecipesListAction.fulfilled, (state, action) => {
      state.recipesList = action.payload;
      state.filteredRecipes = action.payload.recipes;
      state.status = STATUS.success;
    });

    builder.addCase(getRecipesListAction.pending, (state) => {
      state.status = STATUS.loading;
    });

    builder.addCase(getRecipesListAction.rejected, (state) => {
      state.status = STATUS.error;
    });

    builder.addCase(getFiltersListAction.fulfilled, (state, action) => {
      state.filters.cuisine!.avaible = action.payload.cuisine;
      state.filters.difficulty!.avaible = action.payload.difficulty;
      state.filters.mealType!.avaible = action.payload.mealType;
    });
  },
});

export const { applyFilters, resetFilters, changeFilter } = recipesSlice.actions;

export default recipesSlice.reducer;

changingFiltersMiddleware.startListening({
  matcher: isAnyOf(resetFilters, changeFilter),
  effect: async (action, api) => {
    api.dispatch(applyFilters());
  },
});
