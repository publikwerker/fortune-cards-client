import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';
import { HistoryForm } from './historyForm.js';
import { CardPopUp } from './cardPopUp';

export function Spread(props) {
  //display heading if cards have been dealt
  function yourReading(){
    if (props.cardsDealt.length>0){
      return (
        <div>
          <h2 className="reading-heading">Your Reading</h2>
        </div>
      )
    }
  }
  const historyParams = { cardsDealt:props.cardsDealt, currentUser:props.currentUser}
  //display the card images on top
  const theHeading = yourReading();
  const cardImages = props.cardsDealt.map((card, index)=> {
    return (
      <li className="card-block" key={card.name}>
       <span className="position-indicator">Card position: {index+1}</span>
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

// @cardsDealt: deal the appropriate number of cards
function mapStateToProps(state) {
  return {
    cardsDealt:state.tarot.deck.slice(0, state.tarot.spreadNumber),
    currentUser:state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(Spread);