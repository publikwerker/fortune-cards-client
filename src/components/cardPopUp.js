import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

let clicked = false;

export function CardPopUp(card) {
  console.log(card);
  let display = <div className="empty-div"></div>;
  function toggleDisplay() {
    clicked = !clicked;
    if (clicked === true){
      display = 
      <CardDescriptions {...card}/>
    } else {
      display = <div className="empty-div"></div>
    }
  }
  return (
    <div
      className="card-popUp" 
      key={card.name}
      onClick={() => toggleDisplay()}>
      <CardImages {...card}/>
      {display}
    </div>
  )
}