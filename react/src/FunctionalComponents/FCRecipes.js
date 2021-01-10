import React from 'react'
import FCRecipe from '../FunctionalComponents/FCRecipe';

export default function FCRecipes(props) {

    let list = props.items.map(
        (x, index) => <FCRecipe id={x.ID} name={x.Name} img={x.image} cookingMethod={x.CookingMethod} cookingTime={x.time} index={index} getRecipe={props.getRecipe} />);

    return (
        <div className="recipesDiv">
            {list}
        </div>
    )
}
