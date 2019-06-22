import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn"

function InvItem(props) {
  return (
    <li className="recipe item">
      <div className="row itemrow bordering">
        <div className="columns medium-2 bordering">
          <span>{props.name} </span>
        </div>
        <div className="columns medium-2 bordering">
          <span>expires: {props.expireDate} </span>
        </div>
        <div className="columns medium-1 bordering">
          <span>qty: {props.qty} </span>
        </div>
        <div className="columns medium-1 bordering">
          <span>unit: {props.unit} </span>
        </div>
        <div className="columns medium-2 bordering">
          <span>storeplace: {props.storePlace}</span>
        </div>
        <div className="columns medium-2 bordering">
          <span>date in: {props.dateIn}</span>
        </div>
        <div className="columns medium-1 bordering">
         <DeleteBtn onClick={() => props.deleteFood(props.id)}/>
        </div>
        <div className="columns medium-1 bordering">
          <input id="checkbox12" type="checkbox" />
          <label htmlFor="checkbox12">use</label>
        </div>
      </div>
    </li>
  );
}
import React from 'react';
import './style.css';
import { Switch,Sizes } from 'react-foundation';

function InvItem (props) {



return (

<div className="row inv-itemrow bordering">
    {/* <div className="columns small-2 bordering">
        <input id="checkbox12" type="checkbox"/><label htmlFor="checkbox12"></label>
    </div> */}
    <div className="columns small-2 medium-1 inv-select">
        <Switch size={Sizes.SMALL} active={{ text: 'Use' }} inactive={{ text: '?' }}/>
    </div>
    <div className="columns small-5 medium-3 inv-ingredient">
        <span className="tiny-text">{props.name}</span>
    </div>
    <div className="columns small-1 medium-1 inv-location fridge">
        <span>R</span>
    </div>
    <div className="columns small-0 medium-1 inv-qty small-hide">
                <span>qty: {props.qty}</span>
            </div>
            <div className="columns small-0 medium-1 inv-unit small-hide">
                <span>unit: {props.unit}</span>
            </div>
            
            <div className="columns small-0 medium-2 inv-datein small-hide">
                <span>date in:{props.dateIn}</span>
            </div>
    <div className="columns small-2 medium-2 inv-expires">
        <span className="tiny-text">{props.expireDate}</span>
    </div>
            
    <div className="columns small-2 medium-1 inv-x">
         <DeleteBtn onClick={() => props.deleteFood(props.id)}/>
    </div>
    
</div>   



);


};

export default InvItem;
