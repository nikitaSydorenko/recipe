import {request} from "./request";

const VERSION = 'v1'
const BASE_URL = `https://www.themealdb.com/api/json/${VERSION}/1/`

export const fetchMealDB = () => request(`${BASE_URL}search.php?f=f`);
export const fetchMealById = (id) => request(`${BASE_URL}lookup.php?i=${id}`);