import React from 'react';
import './style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
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
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
  const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // we handle the redirect within our component. we don't need to pass in this.props.history as a parameter
  };

  render () {  
    const { errors } = this.state;
  return ( 
    
    <div>
      <form className="callout text-center" noValidate onSubmit={this.onSubmit}>
        <h2>log in</h2>
        
        <div className="floated-label-wrapper">
          <label htmlFor="email">email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            type="email"
            name="email input"
            placeholder="Email"
            className={classnames("", {
              invalid: errors.email || errors.emailnotfound
            })}
          />
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>
        </div>
        <div className="floated-label-wrapper">
          <label htmlFor="pass">password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            name="password input"
            placeholder="Password"
            className={classnames("", {
              invalid: errors.password || errors.passwordincorrect
            })}
          />
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>  
        <input className="button expanded loginSubmit" type="submit" value="Log in"/>
        <span>no account yet? <a href="/signup">Sign up</a> here</span><br></br>
      </form>
    </div>
  )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);