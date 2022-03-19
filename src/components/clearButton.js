import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions/index.js';

// returns clearButton component
// onClick will dispatch RESET
export class ClearButton extends React.Component {
  render (){
    let clearButton = <div className="empty-div"></div>;
    if ( this.props.cardsDealt ){  
      if ( this.props.cardsDealt.length > 0 ){
        clearButton = <button
        className="clear-button"
        id="clear-button"
        href="#" 
        onClick={ ( e ) => this.props.dispatch( reset( ) ) }
        >Clear Reading</button>
      }
    }
    return(
      clearButton
      );
  }
}

function mapStateToProps( state ){
  return {
    cardsDealt: state.tarot.cardsDealt
  };
};

export default connect( mapStateToProps )( ClearButton );