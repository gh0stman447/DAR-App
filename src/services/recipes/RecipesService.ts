import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';
import { Recipe, RecipesList } from '../../lib/types';

export const getRecipesListApi = async () => {
  return await httpService.get<RecipesList>(ApiConfig.recipes);
};

export const getFiltersListApi = async () => {
  const mealType = new Set<string>();
  const cuisines = new Set<string>();
  const difficulties = new Set<string>();

  const response = await httpService.get(ApiConfig.allFilters);

  response.data.recipes.forEach((recipe: Recipe) => {
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
