import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

//meals URL
const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php"

const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const fetchMeals = async (URL) => {
        setLoading(true)
        try {
            const { data } = await axios.get(URL);
            if (data.meals){
                setMeals(data.meals)
            }
            else {
                setMeals([])
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    } 

    const fetchRandomMeal = () => { 
        fetchMeals(randomMealURL)
    }

    useEffect(() => {
        fetchMeals(allMealsURL)
    }, [])

    useEffect(() => {
        if(!searchTerm)
            return
        fetchMeals(`${allMealsURL}${searchTerm}`)
    }, [searchTerm])

    return (
        <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal }}>
            { children }
        </AppContext.Provider>
    )
}


export { AppProvider, AppContext, useGlobalContext}