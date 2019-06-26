import React from 'react';
import './style.css';
// import { Container, Row, Col } from "../Grid";

function RecipeItem (props)
{
    

return (

<div className="row itemrow bordering">
    <div className="columns medium-3 bordering">
        <a href={props.href}><img src={props.src}  alt={props.name}></img></a>
    </div>
    {/* <div className="columns medium-2 bordering">
        <span>qty: </span>
    </div>
    <div className="columns medium-1 bordering">
        <span>unit: </span>
    </div> */}
    <div className="columns medium-9 bordering recipe-title">
        {props.name}
    </div>
    {/* <div className="columns medium-2 bordering">
        <span>{props.energy}</span>
    </div>
    <div className="columns medium-2 bordering">
        <span>nutrients</span><br/>
          <span>protein: {Math.round(props.protein)}</span><br/>
          <span>fat: {Math.round(props.fat)}</span><br/>
          <span>carbs: {Math.round(props.carbs)} </span>
    </div>
    <div className="columns medium-2 bordering">
        <a href={props.href} target="_blank"><button>Select</button></a>
    </div> */}
  
</div>



);

}

export default RecipeItem;
