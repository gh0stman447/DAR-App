import {
  PayloadAction,
  createAsyncThunk,
  createListenerMiddleware,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import { getFiltersListApi, getRecipesListApi } from '../../services/recipes/RecipesService';
import { Field, Filters, Recipe, RecipesList } from '../../lib/types';
import { Status } from '../../lib/constants';

export const isFiltersNull = (filters: Filters): filters is Filters & Record<keyof Filters, null> =>
  Object.values(filters).every((field) => field.value === null);

type RecipesState = {
  recipesList: RecipesList;
  filteredRecipes: Recipe[];
  filters: Filters;
  status: Status;
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
  status: Status.SUCCESS,
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
  async (_, { dispatch }) => {
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
      { payload }: PayloadAction<{ field: keyof Filters; value: Field['value'] }>,
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
    changePage: (
      state,
      { payload: { limit, page } }: PayloadAction<{ limit: number; page: number }>,
    ) => {
      state.filteredRecipes = state.filteredRecipes.slice(limit * page, limit * (page + 1));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRecipesListAction.fulfilled, (state, action) => {
      state.recipesList = action.payload;
      state.filteredRecipes = action.payload.recipes;
      state.status = Status.SUCCESS;
    });

    builder.addCase(getRecipesListAction.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(getRecipesListAction.rejected, (state) => {
      state.status = Status.ERROR;
    });

    builder.addCase(getFiltersListAction.fulfilled, (state, action) => {
      state.filters.cuisine!.avaible = action.payload.cuisine;
      state.filters.difficulty!.avaible = action.payload.difficulty;
      state.filters.mealType!.avaible = action.payload.mealType;
    });
  },
});

export const { changeFilter, applyFilters, resetFilters, changePage } = recipesSlice.actions;

export default recipesSlice.reducer;

changingFiltersMiddleware.startListening({
  matcher: isAnyOf(resetFilters, changeFilter),
  effect: async (action, api) => {
    api.dispatch(applyFilters());
  },
});
