import React from 'react';
import { connect } from 'react-redux';
import { toggle_login, open_history } from '../actions/index.js';
import { clearAuth } from '../actions/protected';
import { reset } from '../actions/index';

export class MemberButton extends React.Component {

  handleLogout = () => {
      this.props.dispatch(clearAuth());
      this.props.dispatch(reset())
  }
  render (){
    if (this.props.currentUser){
      return (<div className="user-links">
          <button
            className="header-link"
            id="custom-button"
            href="#" 
            onClick={(e)=>this.props.dispatch(open_history())}>{this.props.currentUser}</button>
          <button
            className="header-link"
            id="logout-button"
            href="#" 
            onClick={(e)=>this.handleLogout(e)}>logout</button>
        </div>
      )
    } else {
      return(
        <button
          className="header-link"
          id="member-login-button"
          href="#" 
          onClick={(e)=>this.props.dispatch(toggle_login())}>Member Login</button>
      );
    }
  }
} 

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(MemberButton);