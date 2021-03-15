import React from 'react'
import Recipe from "./Recipe";
import './styles/Recipes.css'

const Recipes = ({meals = []}) => {
    return (
        <div className='cards'>
            {meals.map(meal => <Recipe meal={meal} key={meal.idMeal}/>)}
        </div>
    )
}

export default Recipes;