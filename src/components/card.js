import React from 'react';

import './card.css';

export function CardDescriptions(props) {
  return (
    <div className="card-description" id={props.id}>
      <h3>{props.id}</h3>
      <h4>{props.name}</h4>
      {props.desc}
    </div>
  );
};

export function CardImages(props){
  console.log(props.direction);
  let classes = `card-image rotate${props.direction}`
  return (
    <div>
      <img className={classes} src={props.img} alt={props.name} />
    </div>
  )
}
