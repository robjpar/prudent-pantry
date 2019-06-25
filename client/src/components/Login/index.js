import React from 'react';
import './style.css';
// import { Switch } from 'react-foundation';



class Login extends React.Component {
    render () {  

    return ( 
    <div>
      <form className="callout text-center">
        <h2>log in</h2>
        
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input type="email" className="loginEmail" id="email loginEmail" name="email input" placeholder="Email"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input type="password" className="loginPass" id="pass" name="password input" placeholder="Password"/>
        </div>  
        <input className="button expanded loginSubmit" type="submit" value="Log in"/>
        <span>no account yet? <a href="/signup">Sign up</a> here</span><br></br>
      </form>
    </div>
  )
  }
}

export default Login;