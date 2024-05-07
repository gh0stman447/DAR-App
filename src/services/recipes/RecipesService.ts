import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';
import { RecipesList } from '../../state/recipes/recipesSlice';

export const getRecipesListApi = async () => {
  return await httpService.get<RecipesList>(ApiConfig.recipes);
};

export const getFiltersListApi = async () => {
  const mealType = new Set<string>();
  const cuisines = new Set<string>();
  const difficulties = new Set<string>();

  const res = await httpService.get(ApiConfig.allFilters);
  res.data.recipes.forEach((x: any) => {
    cuisines.add(x.cuisine);
    difficulties.add(x.difficulty);
    x.mealType.forEach((t: any) => mealType.add(t));
  });

  return {
    mealType: [...mealType],
    cuisine: [...cuisines],
    difficulty: [...difficulties],
  };
};
