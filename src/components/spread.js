import React from 'react';
import { connect } from 'react-redux';
import { HistoryForm } from './historyForm.js';
import CardPopUp from './cardPopUp';

export class Spread extends React.Component {

  render() {
    //display heading "Your Reading" 
    //if cards have been dealt
    let theHeading;
      if (this.props.cardsDealt.length>0){
        theHeading = <div>
            <h2 className="reading-heading">Your Reading</h2>
          </div>
      } else {
        theHeading=<div className="empty-div"></div>
      }
    const historyParams = { 
      cardsDealt:this.props.cardsDealt,
      currentUser:this.props.currentUser}

    const cardImages = this.props.cardsDealt.map((card, index)=> {
      return (
        <li className="card-block" key={card.name}>
        <span
         className="position-indicator">Card position: {index+1}</span>
        {/* <CardImages {...card}/> */}
        <CardPopUp {...card}/>
      </li>
    )
  });

  return (
    <section className="reading-display">
        {theHeading}
      <ul className="spread">
        {cardImages}
      </ul>
        <HistoryForm params={historyParams}/>
    </section>
  );
}
}
// @cardsDealt: deal the appropriate number of cards
function mapStateToProps(state) {
  return {
    cardsDealt:state.tarot.deck.slice(0, state.tarot.spreadNumber),
    currentUser:state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Spread);