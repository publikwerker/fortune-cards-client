import React from 'react';
import './spread.css';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

export function Spread(props) {

  //determines the facing of each card
  function direction(){
    return Math.floor(Math.random() * Math.floor(4));
  }

  //display heading if cards have been dealt
  function yourReading(){
    if (props.cardsDealt.length>0){
      return (
        <h2 className="reading-heading">Your Reading</h2>
      )
    }
  }

  //display the card images on top
  const theHeading = yourReading();
  const cardImages = props.cardsDealt.map((card)=> {
    card.direction = direction();
    console.log(card.direction);
    return (
      <li className="card-image" key={card.name}>
        <CardImages {...card}/>
      </li>
    )
  });

  // display the card information below
  const cardDescriptions = 
    props.cardsDealt.map((card, index) => {
      return(
      <li className="card-description" key={card.name}>
      <span className="position-indicator">Card position: {index+1}</span>
      <CardDescriptions {...card}/>
    </li>
      )
  });

  //display the comment and save form
  function saveToHistory() {
    if (props.cardsDealt.length>0){
      return (
        <div className="history-form">
        <form>
          <label>Comments:</label>
          <input type="text"></input>
          <button>Save</button>
        </form>
        </div>
      )
    }
  }

  const historyForm = saveToHistory();

  return (
    <div className="reading-display">
        {theHeading}
      <ul className="spread">
        {cardImages}
      </ul>
      <ul className="spread">
        {cardDescriptions}
      </ul>
        {historyForm}
    </div>
  );
}

// @cardsDealt: deal the appropriate number of cards
function mapStateToProps(state) {
return {
  cardsDealt:state.tarot.deck.slice(0, state.tarot.spreadNumber)
};
};

export default connect(mapStateToProps)(Spread);