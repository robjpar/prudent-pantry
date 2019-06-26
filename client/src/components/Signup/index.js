import React from 'react';
import './style.css';
// import { Switch } from 'react-foundation';



class Signup extends React.Component {  
      
render () {  

  return ( 
    <div>
      <form className="callout text-center">
        <h2>sign up</h2>
        <div className="floated-label-wrapper">
          <label for="full-name">full name</label>
          <input type="text" id="full-name signupName" name="full name input" placeholder="Full name"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input type="email" id="email signupEmail" name="email input" placeholder="Email"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input type="password" className="signupPass" id="pass" name="password input" placeholder="Password"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">confirm password</label>
          <input type="password" className="signupPass" id="pass" name="password input" placeholder="Password"/>
        </div>
        
        <input className="button expanded signupSubmit" type="submit" value="Sign up"/>
        <span>already have an account? <a href="/login">Login</a> here</span><br></br>
      </form>
    </div>


    )
  }
}

export default Signup;