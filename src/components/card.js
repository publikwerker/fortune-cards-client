import React from 'react';

import './card.css';

export function CardDescriptions(props) {
  return (
    <div className="cardDescription" id={props.id}>
      <h3>{props.id}</h3>
      <h4>{props.name}</h4>
      {props.desc}
    </div>
  );
};

export function CardImages(props){
  console.log(props.img);
  return (
    <div>
      <img src={props.img} alt={props.name} />
    </div>
  )
}
