import React from 'react'
import Recipe from "./Recipe";

const Recipes = ({meals = []}) => meals.map(meal => <Recipe meal={meal} key={meal.idMeal}/>)



export default Recipes;