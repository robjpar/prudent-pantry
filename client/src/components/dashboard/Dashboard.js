import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import './style.css';
import { faBreadSlice, faEgg, faCarrot, faFish } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    if (!user.name) {        
        window.location.replace("../");;
    }
return (
    <div className="container title-container row roundy">  

    {/* title column       */}
    <div className="columns medium-8 medium-push-2">
                       <div className="row">
                         <div className="columns small-2 medium-1 icon-column text-center">
                           <FontAwesomeIcon className="icon" icon={faBreadSlice} size="lg"/>
                         </div>
                         <div className="columns small-1 medium-1 icon-column text-center">
                           <FontAwesomeIcon className="icon" icon={faEgg} size="lg"/>
                         </div>
                         <div className="columns small-6 medium-8 text-center">
                           <h4>Prudent Pantry</h4>
                         </div>
                         <div className="columns small-1 medium-1 icon-column text-center">
                           <FontAwesomeIcon className="icon" icon={faCarrot} size="lg"/>
                         </div>
                         <div className="columns small-2 medium-1 icon-column text-center">
                           <FontAwesomeIcon className="icon" icon={faFish} size="lg"/>
                         </div>
                       </div>    
        </div>

    {/* hello column       */}
        <div className="columns small-6 medium-2 medium-pull-8">
              <h6>
              <span style={{float:'left'}}>
                Hey there,<b> {user.name.split(" ")[0]}</b>
              </span></h6>
        </div>

 {/* logout column             */}
 <div className="columns small-6 medium-2 ">
              <h6>
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