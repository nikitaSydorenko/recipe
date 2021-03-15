import React from 'react'

const Recipe = ({meal = {}}) => {
    console.log(meal)
    return (
        <div>{meal.strMeal}</div>
    )
}

export default Recipe