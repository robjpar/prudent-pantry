import React from 'react';
import './style.css';

function InvItem (props) {



return (

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
        <span>storeplace: fridge</span>
    </div>
    <div className="columns medium-2 bordering">
        <span>date in: yesterday</span>
    </div>
    <div className="columns medium-1 bordering">
        <button>X</button>
    </div>
    <div class="columns medium-1 bordering">
        <input id="checkbox12" type="checkbox"/><label for="checkbox12">use</label>
    </div>
</div>   

);


};

export default InvItem;

