import React from 'react';
import './style.css';

function Container(props) {
    return <div className="row centering">
    
    
    <div className="columns medium-1 nopad">&nbsp;</div>
    
    
    <div className="columns medium-10">{props.children}</div>

    <div className="columns medium-1 nopad">&nbsp;</div>
    
    </div>;

}

export default Container;

