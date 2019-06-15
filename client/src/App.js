import React from 'react';

import './App.css';
import Container from './components/Container';
import Nav from './components/Nav'
import Add from './components/Add';
import InvAll from './components/InvAll';
import RecipeAll from './components/RecipeAll';


function App() {
  return (
   <Container>
     
     <Nav
     
     />
     <Add 
     
     />
<div className="main-container">

    <div className="row">

        <div className="columns medium-1 centering">
         <span>&nbsp;</span>

        </div>
 
        <div className="columns medium-10 centering">
            <h5>inventory</h5>

     
    <InvAll

    />

    <hr/>
    <h5>Recipes</h5>

    <RecipeAll

    />
    
    
<br/>

      </div>
        <div className="columns medium-1 centering">
        </div>
    </div>
</div>

   </Container>
  );
}

export default App;
