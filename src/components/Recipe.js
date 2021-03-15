import React from 'react'
import './styles/Recipe.css'

const Recipe = ({meal}) => {
    console.log(meal)
    return (
        <div className="card">
            <img src={meal.strMealThumb} alt="strMealThumb"/>
            <div className="container">
                <h4 className="title"><b><a href="#">{meal.strMeal}</a></b></h4>
                <p>{meal.strArea}</p>
            </div>
        </div>
    )
}

export default Recipe