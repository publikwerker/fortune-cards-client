import React from 'react';
import { connect } from 'react-redux';
import {CardImages, CardDescriptions } from './card';

export function CardPopUp(card, props) {
  let display = <div className="empty-div"></div>;
  if (props.showDescription === true){
      display = 
      <CardDescriptions {...card}/>
    }
  return (
    <div
      className="card-popUp" 
      key={card.name}>
      <CardImages {...card}/>
      {display}
    </div>
  )
}

function mapStateToProps(state){
  return {
    showDescription: state.tarot.showDescription,
  }
}

export default connect(mapStateToProps)(CardPopUp);