import React, { useState,useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY= 'ceva.recipes'

function App()
{
    const [selectedRecipeId,setSelectedRecipeId]=useState();
    const [recipes,setRecipes]=useState(sampleRecipies)
    const selectedRecipe=recipes.find(recipe => recipe.id===selectedRecipeId)
    console.log(selectedRecipe)
    useEffect(()=>{
        const recipeJSON= localStorage.getItem(LOCAL_STORAGE_KEY)
        if(recipeJSON!=null) setRecipes(JSON.parse(recipeJSON))
    },[])

    useEffect(()=>{ 
         localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
        },[recipes])

    const recipeContextValue={
        handleRecipeAdd,
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange,
    }

    function handleRecipeChange(id , recipe)
    {
        const newRecipe=[...recipes]
        const index = newRecipe.findIndex(r=>r.id===id)
        newRecipe[index]=recipe
        setRecipes(newRecipe)
    }

    function handleRecipeSelect(id)
    {
        setSelectedRecipeId(id);
    }

    function handleRecipeAdd()
    {
    const newRecipe={
        id: uuidv4(),
        name: '',
        servings:0 ,
        cookTime: '',
        instructions: '',
        ingredients: [
            { id: uuidv4(), name: '' ,amount: ''}
        ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes,newRecipe])
    }

    function handleRecipeDelete(id){
        if(selectedRecipeId!=null && selectedRecipeId===id)
        {
            setSelectedRecipeId(undefined)
        }
        setRecipes(recipes.filter(recipe => recipe.id!==id))
    }

    return(
        <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes}/>
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
        </RecipeContext.Provider>
    );
}

const sampleRecipies=[
    {
        id: 1,
        name: 'Chicken',
        servings: 3,
        cookTime: '1:45',
        instructions: "1.Put salt on Chicken \n 2.Put the Chicken in oven \n 3.Enjoy your meal",
        ingredients: [
            {
                id:1,
                name: 'Chicken',
                amount: '2 pounds'
            },
            {
                id:2,
                name: 'Salt',
                amount: '1 g'
            }
        ]
    },
    {
        id: 2,
        name: 'Pork',
        servings: 4,
        cookTime: '4:45',
        instructions: "1.Put salt on Pork \n 2.Put the Pork in oven \n 3.Enjoy your meal",
        ingredients: [
            {
                id:3,
                name: 'Pork',
                amount: '25 pounds'
            },
            {
                id:4,
                name: 'Condiments',
                amount: '10 g'
            }
        ]
    }
]

export default App;