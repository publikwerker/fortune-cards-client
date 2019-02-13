import React from 'react';
import { connect } from 'react-redux';
import { open_login, open_history } from '../actions/index.js';

class MemberButton extends React.Component {
  render (){

console.log('current user is' + this.props.currentUser);
    if (this.props.currentUser){
      return (
        <button className="header-link"
        href="#" onClick={(e)=>this.props.dispatch(open_history())}>{this.props.currentUser}</button>
      )
    } else {
      return(
        <button className="header-link"
        href="#" onClick={(e)=>this.props.dispatch(open_login())}>Member Login</button>
      )
    }
  }
} 

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(MemberButton);