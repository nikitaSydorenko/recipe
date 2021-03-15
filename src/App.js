import React, {useState, useEffect} from 'react'
import './App.css';
import {fetchMealDB} from "./utils/api/fetchMealDB";
import Recipes from "./components/Recipes";

const App = () => {

  const [meals, setMeals] = useState({
    mealsRes: {}
  })

  useEffect( async () => {
    const responseMeal = await fetchMealDB()
    setMeals({
      mealsRes: responseMeal.data
    })
  }, [])


    return (
      <div className="App">
      <Recipes meals={meals.mealsRes.meals}/>
    </div>
  );
}

export default App;
