import React from 'react';
import './style.css';
// import RecipeItem from '../RecipeItem';


function RecipeAll ({children}) {


return (
  <div>
    <h5 className="shadowing">Search Recipes</h5>
    <ul className="list">
        <div className="container scrollingers middling bordering shadow" >{children}</div>
    </ul>
  </div>    
    );
}

export default RecipeAll;
