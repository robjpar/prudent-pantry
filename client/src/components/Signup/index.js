import React from 'react';
import './style.css';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
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
    this.props.registerUser(newUser, this.props.history); 
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
            className={classnames("", {
              invalid: errors.name
            })}
          />
          <span className="red-text">{errors.name}</span>
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
            className={classnames("", {
              invalid: errors.email
            })}
          />
          <span className="red-text">{errors.email}</span>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            name="password input"
            placeholder="Password"
            className={classnames("", {
              invalid: errors.password2
            })}
          />
          <span className="red-text">{errors.password}</span>
        </div>
        <div className="floated-label-wrapper">
          <label for="pass">confirm password</label>
          <input
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            type="password"
            name="password input"
            placeholder="Password"
            className={classnames("", {
              invalid: errors.password2
            })}
          />
          <span className="red-text">{errors.password2}</span>
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
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));