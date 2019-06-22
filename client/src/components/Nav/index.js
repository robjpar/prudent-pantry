import React from 'react';
import './style.css';

function Nav (props) {


return (

<nav className="top-bar topbar-responsive">
  <div className="top-bar-title">
    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
      <button className="menu-icon" type="button" data-toggle></button>
    </span>
    <a className="topbar-responsive-logo" href="#"><strong>Prudent Pantry</strong></a>
  </div>
  <div id="topbar-responsive" className="topbar-responsive-links">
    <div className="top-bar-right">
      <ul className="menu simple vertical medium-horizontal">
        <li><a href="#">Home</a></li>
        <li><a href="#">Login</a></li>

 
        
        
      </ul>
    </div>
  </div>
</nav>





);

};

export default Nav;


