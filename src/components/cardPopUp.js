import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

export function CardPopUp(card) {
  console.log(card);
  let clicked = false;
  let display = <div className="empty-div"></div>;
  function toggleDisplay(){
    clicked = !clicked;
    if (clicked === true){
      display = 
      <CardDescriptions {...card}/>
    } else {
      display = <div className="empty-div"></div>
    }
  }
  return (
    <section 
      className="card-popUp" 
      key={card.name}
      onClick={toggleDisplay()}>
      <CardImages {...card}/>
      {display}
    </section>
  )
}