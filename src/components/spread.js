import React from 'react';
import { connect } from 'react-redux';
import CardPopUp from './cardPopUp';

export class Spread extends React.Component {

  render() {
    //display heading "Your Reading" 
    //if cards have been dealt
    let theHeading;
      if (this.props.cardsDealt.length>0){
        theHeading = <div>
            <h2 className="reading__heading">Your Reading</h2>
            <p>Click the card to toggle description.</p>
          </div>
      } else {
        theHeading=<div className="empty-div"></div>
      }

    const cardImages = this.props.cardsDealt.map((card, index)=> {
      return (
        <li className="card__block" key={card.name}>
        <span
         className="card__position-indicator">Card position: {index+1}</span>
        <CardPopUp {...card}/>
      </li>
    )
  });

  return (
    <section className="reading__display">
        {theHeading}
      <ul className="spread">
        {cardImages}
      </ul>
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