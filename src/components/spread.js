import React from 'react';
import './spread.css';
import { connect } from 'react-redux';
import Card from './card';

export function Spread(props) {



  const cards = 
    props.cardsDealt.map((card) => {
      return(
      <li>
        {card.id}
      <Card {...card}/>
      {card.desc}
    </li>
      )
    });

  return (
    <div>
      <h3>Your Reading</h3>
      <ul className="spread">
        {cards}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
return {
  cardsDealt:state.deck.deck.slice(0, state.deck.spreadNumber)
};
};

export default connect(mapStateToProps)(Spread);