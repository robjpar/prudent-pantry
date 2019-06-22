import React from 'react';
import './style.css';
// import { Switch } from 'react-foundation';



class Login extends React.Component {


  

    
      // var showClass = 'show';
    
      // $('input').on('checkval', function () {
      //   var label = $(this).prev('label');
      //   if(this.value !== '') {
      //     label.addClass(showClass);
      //   } else {
      //     label.removeClass(showClass);
      //   }
      // }).on('keyup', function () {
      //   $(this).trigger('checkval');
      // });
   
    
    
      
render () {  

return ( 
<div>
<div className="row navcolors">
  <div className="columns small-5 medium-8"></div>
    <p className="navbutton">Prudent Pantry</p>
  <div className="columns small-3 medium-2"></div>
    <button className="navbutton">  Login  </button>
  <div className="columns small-3 medium-2"></div>
    <button className="navbutton">  Sign Up  </button>
</div>

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
  <span>no account yet? <a href="#">Sign up</a> here</span><br></br>
</form>



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
  <span>already have an account? <a href="#">Login</a> here</span><br></br>
</form>



</div>
  

)

}
}

export default Login;