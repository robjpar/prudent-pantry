import React from 'react';
import './style.css';
// import { Switch } from 'react-foundation';



class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
  const userData = {
      email: this.state.email,
      password: this.state.password
    };
  console.log(userData);
  };

  render () {  
    const { errors } = this.state;
  return ( 
    
    <div>
      <form className="callout text-center" noValidate onSubmit={this.onSubmit}>
        <h2>log in</h2>
        
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            className="loginEmail"
            name="email input"
            placeholder="Email"
          />
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            className="loginPass"
            name="password input"
            placeholder="Password"
          />
        </div>  
        <input className="button expanded loginSubmit" type="submit" value="Log in"/>
        <span>no account yet? <a href="/signup">Sign up</a> here</span><br></br>
      </form>
    </div>
  )
  }
}

export default Login;