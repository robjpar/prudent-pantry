import React from 'react';
import './style.css';
// import { Switch } from 'react-foundation';



class Signup extends React.Component {  
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }     

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  };
render () {  
  const { errors } = this.state;
  return ( 
    <div>
      <form className="callout text-center" noValidate onSubmit={this.onSubmit}>
        <h2>sign up</h2>
        <div className="floated-label-wrapper">
          <label for="full-name">full name</label>
          <input 
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            name="full name input"
            placeholder="Full name"
          />
        </div>
        <div className="floated-label-wrapper">
          <label for="email">email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"  
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
            className="signupPass"
            name="password input"
            placeholder="Password"
          />
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">confirm password</label>
          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="password"
            className="signupPass"
            name="password input"
            placeholder="Password"
          />
        </div>
        
        <input
          className="button expanded signupSubmit"
          type="submit"
          value="Sign up"
        />
        <span>already have an account? <a href="/login">Login</a> here</span><br></br>
      </form>
    </div>


    )
  }
}

export default Signup;