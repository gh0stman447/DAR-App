const baseUrl = 'https://dummyjson.com/';

const ApiConfig = {
  recipes: `${baseUrl}recipes/?limit=50`,
  allFilters: `${baseUrl}recipes/?select=mealType,cuisine,difficulty&limit=50`,
};

export default ApiConfig;
