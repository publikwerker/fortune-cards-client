import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

export function CardPopUp(card) {
  console.log(card);
  return (
    <section 
      className="card-popUp" 
      key={card.name}>
      <CardImages {...card}/>
    </section>
  )
}