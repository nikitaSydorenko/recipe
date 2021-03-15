import React, {useState, useEffect} from "react";
import './styles/CardRecipe.css'
import {fetchMealById} from "../utils/api/fetchMealDB";
import {NavLink} from "react-router-dom";

const CardRecipe = ({ match }) => {
    const id = match.params.idMeal;
    const [meal, setMeal] = useState([])

    async function FetchId() {
        const response = await fetchMealById(id)
        setMeal(...response.data.meals)
    }

    useEffect(() => {
        FetchId()
    }, [])

    return (
        <div>
            <NavLink to="/">Back to all meals</NavLink>
            <div className='recipe-card'>
                <img src={meal.strMealThumb} alt=""/>
                <div className="recipe-card__body">
                    <h1 className="recipe-card__heading">{meal.strMeal}</h1>
                    <h2 className="recipe-card__subhead">{meal.strInstructions}</h2>
                    <ul>
                        <li>Area: {meal.strArea}</li>
                        <li>Category: {meal.strCategory}</li>
                    </ul>
                    <ul className="recipe-card__nav">
                        <li>
                            <h3 className="active">Ingredients</h3>
                        </li>
                    </ul>
                    <ul className="recipe-card__ingredients">
                        <li>{meal.strIngredient1}</li>
                        <li>{meal.strIngredient2}</li>
                        <li>{meal.strIngredient3}</li>
                        <li>{meal.strIngredient4}</li>
                        <li>{meal.strIngredient5}</li>
                        <li>{meal.strIngredient6}</li>
                        <li>{meal.strIngredient7}</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}


export default CardRecipe