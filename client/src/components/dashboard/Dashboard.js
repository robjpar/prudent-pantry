import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    if (!user.name) {        
        window.location.replace("../");;
    } else {
      this.props.onLogin(user.id);
    }
return (
      <div style={{ height: "10vh" }} className="container valign-wrapper">
        <div className="container valign-wrapper">
          <div className="container valign-wrapper">
            <h6>
              <p style={{float:'left'}}>
                Hey there,<b> {user.name.split(" ")[0]}</b>
              </p>
              <button
              style={{
                width: "70px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "5px",
                float: "right",
                fontSize: "16px"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);