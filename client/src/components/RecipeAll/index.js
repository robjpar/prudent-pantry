import React from 'react';
import './style.css';
import RecipeItem from '../RecipeItem';


function RecipeAll ({children}) {


return (
    <div>
        <ul className="list">
    <div className="container scrolling middling bordering" >{children}></div>
</ul>



    </div>
    
    
    );

}

export default RecipeAll;
