import httpService from '../HttpService';
import ApiConfig from '../ApiConfig';

export const getRecipesListApi = async () => {
  return await httpService.get(ApiConfig.recipes);
};

// export const postPizzasApi = async (data) => {
//   return await httpService.post(ApiConfig.Pizzas, data);
// };

// export const deletePizzasApi = async (id) => {
//   const url = `${ApiConfig.Pizzas}/${id}`;
//   await httpService.delete(url);
// };

// export const putPizzasApi = async (id, data) => {
//   const url = `${ApiConfig.Pizzas}/${id}`;
//   await httpService.put(url, data);
// };
