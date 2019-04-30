import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/index.js';

export class ClearButton extends React.Component {
  render (){
    return(
      <button
          className="reset-button"
          id="reset-button"
          href="#" 
          onClick={(e)=>this.props.dispatch(reset())}
          >Clear Reading</button>
      );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(ClearButton);