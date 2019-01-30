import React from 'react';
import './spread.css';
import Card from './card';

export default function Spread(props) {

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