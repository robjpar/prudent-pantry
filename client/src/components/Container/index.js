import React from 'react';
import './style.css';

function Container(props) {
    return (
    <div className="main-container">
        <div className="row">
            <div className="columns medium-1 centering">&nbsp;</div>
    
            <div className="columns medium-10 centering">{props.children}</div>
    
            <div className="columns medium-1 centering">&nbsp;</div>
        </div>
    </div>
    )

}

export default Container;

