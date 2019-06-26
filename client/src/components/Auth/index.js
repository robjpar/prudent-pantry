import React from 'react';
import SignUp from '../Signup';
import Login from '../Login';

class Auth extends React.Component {

    state = {
        showSignup: false,
    }

    handleToggleAuthForm = () => {
        this.setState({ showSignup: !this.state.showSignup });
    }

    // handleUserLoggedIn

    render() {
        return this.state.showSignup ?
            <SignUp
                toggleAuthForm={this.handleToggleAuthForm}
                accountCreated={this.props.accountCreated} /> :
            <Login
                toggleAuthForm={this.handleToggleAuthForm}
                userLoggedIn={this.props.loginStatusChanged}
            />;
    }
}

export default Auth;