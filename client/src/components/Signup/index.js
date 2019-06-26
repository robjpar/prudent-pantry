import React from 'react';
import './style.css';

class Login extends React.Component {

    handleLoginSuccess = (userId) => {
        this.props.userLoggedIn(userId);
    } 
    render() {
        return (

          <div>
      <form className="callout text-center">
        <h3>sign up</h3>
        <div className="floated-label-wrapper">
          <label for="full-name">full name</label>
          <input type="text" id="full-name signupName" name="full name input" placeholder="full name"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input type="email" id="email signupEmail" name="email input" placeholder="email"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input type="password" className="signupPass" id="pass" name="password input" placeholder="password"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">confirm password</label>
          <input type="password" className="signupPass" id="pass" name="password input" placeholder="confirm password"/>
        </div>
        
        <input className="button expanded signupSubmit" type="submit" value="Sign up"/>
        <span>already have an account? &nbsp;</span> <button className="button secondary small" onClick={this.props.toggleAuthForm}>Login here</button><br></br>
      </form>

      
    </div>
           
        )
    }
}

export default Login;

