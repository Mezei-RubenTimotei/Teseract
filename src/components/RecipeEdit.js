import React ,{useContext}from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange,handleRecipeSelect}=useContext(RecipeContext)

    function handleChange(changes){
        handleRecipeChange(recipe.id,{...recipe,...changes})
    }

    function handleIngredientChange(id,ingredient)
    {
        const newIngredients=[...recipe.ingredients]
        const index= newIngredients.findIndex(e => e.id===id)
        newIngredients[index]=ingredient
        handleChange({ingredients: newIngredients})
    }

    function handleIngredientAdd()
    {
        const newIngredient={
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients,newIngredient]})
    }
    function handleIngredientDelete(id)
    {
        handleChange({ingredients: recipe.ingredients.filter(i=> i.id!==id)})
    }
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit_remove-btn-container'>
            <button 
            className='btn recipe-edit_remove-btn'
            onClick={()=>handleRecipeSelect(undefined)}
            >
                &times;
            </button>
        </div>
        <div className='recipe-edit_details-grid'>
            <label 
            htmlFor="name"
            className='recipe-edit_label'
            >
            Name
            </label>
            <input 
            className='recipe-edit_input'
            type="text" 
            name="name"
            value={recipe.name}
            onChange={e =>handleChange({name: e.target.value})}
            id="name"
             />

            <label
             htmlFor="cookTime"
             className='recipe-edit_label'
             >
                 Cook Time
            </label>
            <input 
            type="text"
            name="cookTime"
            id="cookTime"
            value={recipe.cookTime}
            onChange={e =>handleChange({cookTime: e.target.value})}
            className='recipe-edit_input'
            />

            <label 
            htmlFor="servings"
            className='recipe-edit_label'
            >
                Serving
            </label>
            <input 
            type="number" 
            min="1"
            name="servings"
            id="servings"
            value={recipe.servings}
            onChange={e =>handleChange({servings: parseInt(e.target.value)||''})}
            className='recipe-edit_input'
            />

            <label 
            htmlFor="instructions"
            className='recipe-edit_label'
            >
                Instructions
            </label>
            <textarea 
            type="text"
            name="instructions"
            id="instructions"
            onChange={e =>handleChange({instructions: e.target.value})}
            value={recipe.instructions}
            className='recipe-edit_input'
            />
        </div>
        <br />
        <label className='recipe-edit_label'>Ingredients</label>
        <div className='recipe-edit_ingredient-grid'>
            {recipe.ingredients.map(ingredient=>
                <RecipeIngredientEdit 
                key={ingredient.id} 
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                ingredient={ingredient}/>
            )}
            <div>Name</div>
            <div>Amount</div>
            <div></div>
        </div>
        <div className='recipe-edit_add-btn-container'>
            <button
             className='btn btn--primary'
             onClick={()=>handleIngredientAdd()}
             >
                Add ingredient
            </button>
        </div>
    </div>
  )
}
