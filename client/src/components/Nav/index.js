import React from 'react';
import './style.css';
// get fontawesome imports

import { faBreadSlice, faEgg, faCarrot, faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Nav (props) {


return (

<nav className="top-bar topbar-responsive roundy">
  <div className="row">
    <div className="columns small-2 medium-1">
      <FontAwesomeIcon className="icon" icon={faBreadSlice} size="md"/>
    </div>
    <div className="columns small-2 medium-1">
      <FontAwesomeIcon className="icon" icon={faEgg} size="md"/>
    </div>
    <div className="columns small-4 medium-8">
      <h3>Prudent Pantry</h3>
    </div>
    <div className="columns small-2 medium-1">
      <FontAwesomeIcon className="icon" icon={faCarrot} size="md"/>
    </div>
    <div className="columns small-2 medium-1">
      <FontAwesomeIcon className="icon" icon={faFish} size="md"/>
    </div>
  </div>
</nav>





);

};

export default Nav;


