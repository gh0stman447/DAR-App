import { Recipe } from "./Recipe";

export type RecipesList = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

