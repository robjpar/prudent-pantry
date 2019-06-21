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

export default InvItem;
