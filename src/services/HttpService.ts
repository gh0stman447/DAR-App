import axios from 'axios';
import { Recipe, RecipesList } from '../state/recipes/recipesSlice';

const HttpExport = {
  get: axios.get<RecipesList>,
};

export default HttpExport;
