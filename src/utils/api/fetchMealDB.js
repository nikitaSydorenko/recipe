import {request} from "./request";

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f'; //List all meals by first letter

export const fetchMealDB = () => request(`${URL}`);