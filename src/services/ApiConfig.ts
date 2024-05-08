const baseUrl = 'https://dummyjson.com/';

const ApiConfig = {
  recipes: `${baseUrl}recipes/`,
  allFilters: `${baseUrl}recipes/?select=mealType,cuisine,difficulty`,
};

export default ApiConfig;
