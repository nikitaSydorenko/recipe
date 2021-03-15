import React, {useState, useEffect} from 'react'
import './App.css';
import {fetchMealDB} from "./utils/api/fetchMealDB";
import Recipes from "./components/Recipes";
import {BrowserRouter, NavLink} from "react-router-dom";
import {Route, Switch} from "react-router";
import CardRecipe from "./components/CardRecipe";

const App = () => {

    const [meals, setMeals] = useState({
        mealsRes: {}
    })

    async function fetchMyAPI() {
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
            <BrowserRouter>
                <Switch>

                    <Route path={'/meal/:idMeal'}
                           render={(props) => <CardRecipe {...props} meals={meals.mealsRes.meals}/>}/>

                        <Route path={'/'}
                               render={() => <Recipes meals={meals.mealsRes.meals}/>}
                        />

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
