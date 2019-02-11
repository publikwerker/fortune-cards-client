import React from 'react';
import { open_login } from '../actions/index.js';

export default class memberButton extends React.Component {

  render (){
    if (this.props.currentUser){
      return (
        <button className="header-link"
        href="#" onClick={(e)=>this.props.dispatch(open_login())}>{this.props.currentUser}</button>
      )
    } else {
      return(
        <button className="header-link"
        href="#" onClick={(e)=>this.props.dispatch(open_login())}>Member Login</button>
      )
    }
  }
} 

const mapStateToProps = (state) => 