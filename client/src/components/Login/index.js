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
        <h3>log in</h3>
        
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input type="email" className="loginEmail" id="email loginEmail" name="email input" placeholder="email"/>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input type="password" className="loginPass" id="pass" name="password input" placeholder="password"/>
        </div>  
        <input className="button expanded loginSubmit" type="submit" value="Log in"/>
        <span>no account yet? &nbsp;</span><button className="button secondary small" onClick={this.props.toggleAuthForm}>signup here</button><br></br>
      </form>

      
    </div>   
        )
    }
}

export default Login;
