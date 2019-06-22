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
        <span className="tiny-text">chicken sausage</span>
    </div>
    <div className="columns small-1 medium-1 inv-location fridge">
        <span>R</span>
    </div>
    <div className="columns small-0 medium-1 inv-qty small-hide">
                <span>qty:</span>
            </div>
            <div className="columns small-0 medium-1 inv-unit small-hide">
                <span>unit:</span>
            </div>
            
            <div className="columns small-0 medium-2 inv-datein small-hide">
                <span>date in:</span>
            </div>
    <div className="columns small-2 medium-2 inv-expires">
        <span className="tiny-text">1.1.19</span>
    </div>
            
    <div className="columns small-2 medium-1 inv-x">
        <button className="inv-xbutton">x</button>
    </div>
    
</div>   



);


};

export default InvItem;

