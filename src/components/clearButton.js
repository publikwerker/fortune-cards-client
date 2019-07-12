import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/index.js';

export class ClearButton extends React.Component {
  render (){
    let resetButton = <div className="empty-div"></div>;
    if (this.props.cardsDealt){  
      if (this.props.cardsDealt.length > 0 ){
        resetButton = <button
        className="reset-button"
        id="reset-button"
        href="#" 
        onClick={(e)=>this.props.dispatch(reset())}
        >Clear Reading</button>
      }
    }
    return(
      resetButton
      );
  }
}

function mapStateToProps(state){
  return {
    cardsDealt: state.tarot.cardsDealt,
  };
};

export default connect(mapStateToProps)(ClearButton);