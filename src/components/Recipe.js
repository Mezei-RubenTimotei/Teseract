import React,{useContext} from 'react'
import IngredientList from './IngredientList';
import { RecipeContext } from './App';

export default function Recipe(props) {
    const { handleRecipeDelete,handleRecipeSelect }=useContext(RecipeContext)
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingredients
    }=props;
  return (
    <div className='recipe'>
        <header className='recipe_header'>
            <h3 className='recipe_title'>{name}</h3>
            <div>
                <button 
                className='btn btn--primary mr-1'
                onClick={()=>handleRecipeSelect(id)}
                >
                    Edit
                </button>

                <button
                 className='btn btn--danger'
                 onClick={()=>handleRecipeDelete(id)}
                > 
                  Delete
                 </button>
            </div>
        </header>
        <body>
            <div className='recipe_row'>
                <span className='recipe_label'>Cook time:</span>
                <span className='recipe_value'>{cookTime}</span>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Servings</span>
                <span className='recipe_value'>{servings}</span>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Instructions</span>
                <div className='recipe_value recipe_instructions recipe_value--indented'>
                    {instructions}
                </div>
            </div>
            <div className='recipe_row'>
                <span className='recipe_label'>Ingredients:</span>
                <div className='recipe_value  recipe_value--indented'>
                    <IngredientList ingredients={ingredients} />
                </div>
            </div>

        </body>
    </div>
  )
}
