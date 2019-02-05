import React from 'react';
import './spread.css';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

export function Spread(props) {
  function direction(){
    return Math.floor(Math.random() * Math.floor(4));
  }
  const cardImages = props.cardsDealt.map((card)=> {
    card.direction = direction();
    console.log(card.direction);
    return (
      <li className="card-image">
        <CardImages {...card}/>
      </li>
    )
  });

  const cardDescriptions = 
    props.cardsDealt.map((card, index) => {
      return(
      <li className="card-description">
      Card position: {index+1}
      <CardDescriptions {...card}/>
    </li>
      )
  });

  return (
    <div>
      <h2>Your Reading</h2>
      <ul className="spread">
        {cardImages}
        {cardDescriptions}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
return {
  cardsDealt:state.tarot.deck.slice(0, state.tarot.spreadNumber)
};
};

export default connect(mapStateToProps)(Spread);