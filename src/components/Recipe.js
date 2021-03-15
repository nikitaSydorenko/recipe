import React from 'react'
import './styles/Recipe.css'
import {NavLink} from "react-router-dom";

const Recipe = ({ meal }) => {
    return (
        <div className="card">
            <img src={meal.strMealThumb} alt="strMealThumb"/>
            <div className="container">
                <h4 className="title"><b><NavLink to={`/meal/${meal.idMeal}`}>{meal.strMeal}</NavLink></b></h4>
                <p>{meal.strArea}</p>
            </div>
        </div>
    )
}

export default Recipe;