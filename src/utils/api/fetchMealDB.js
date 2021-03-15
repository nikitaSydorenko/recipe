import {request} from "./request";

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f'; //List all meals by first letter
const BASE_URL_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='; //Lookup full meal details by id

export const fetchMealDB = () => request(`${URL}`);
export const fetchMealById = (id) => request(`${BASE_URL_BY_ID}${id}`);