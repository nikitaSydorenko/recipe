import React, {useState, useEffect} from 'react'
import './App.css';
import {fetchMealDB} from "./utils/api/fetchMealDB";
import Recipes from "./components/Recipes";

const App = () => {

    const [meals, setMeals] = useState({
        mealsRes: {}
    })

    async function fetchMyAPI(){
        const responseDB = await fetchMealDB()
        setMeals({
            mealsRes: responseDB.data
        })
    }

    useEffect(() => {
        fetchMyAPI()
    }, [])


    return (
        <div className="App">
            <div className="cards">
                <Recipes meals={meals.mealsRes.meals}/>
            </div>
        </div>
    );
}

export default App;
