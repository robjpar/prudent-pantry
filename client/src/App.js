import React from 'react';

import './App.css';
import Container from './components/Container';
// import Nav from './components/Nav'
import Add from './components/Add';
import InvAll from './components/InvAll';
import RecipeAll from './components/RecipeAll';
import Login from './components/Login';


function App() {
  return (
    
   <Container>
     
     {/* <Nav
     
     /> */}

     <Login

     />
     <div>
       <h1>Prudent Pantry</h1>
     </div>
     <div classname="centering">
     <i class="fas fa-utensil-spoon" alt="spoon"></i>
       <h5 className="shadowing centering">Add Item:</h5>
       <i class="fas fa-utensil-spoon" alt="spoon"></i>
     </div>
     
     <Add 
     
     />
<div className="main-container">

    <div className="row">

        <div className="columns medium-1 centering">
         &nbsp;

        </div>
 
        <div className="columns medium-10 centering">
            <h5 className="shadowing">Inventory</h5>

     
    <InvAll

    />

    <hr/>
    <h5 className="shadowing">Recipes</h5>

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
