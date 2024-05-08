import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';
import { Recipe, RecipesList } from '../../state/recipes/recipesSlice';

export const getRecipesListApi = async () => {
  return await httpService.get<RecipesList>(ApiConfig.recipes);
};

export const getFiltersListApi = async () => {
  const mealType = new Set<string>();
  const cuisines = new Set<string>();
  const difficulties = new Set<string>();

  const res = await httpService.get(ApiConfig.allFilters);
  res.data.recipes.forEach((recipe: Recipe) => {
    cuisines.add(recipe.cuisine);
    difficulties.add(recipe.difficulty);
    recipe.mealType.forEach((type: any) => mealType.add(type));
  });

  return {
    mealType: [...mealType],
    cuisine: [...cuisines],
    difficulty: [...difficulties],
  };
};
