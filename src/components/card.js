import React from 'react';

export function CardDescriptions(props) {
  let facingText = '';
  if (props.facing >= 0){
    switch (props.facing) {
      case 0:
        facingText = 'Facing upward.';
        break;
      case 1:
        facingText = 'Facing to the right.';
        break;
      case 2:
        facingText = 'Facing downward.';
        break;
      case 3:
        facingText = 'Facing to the left.';
        break;
      default:
        break;
    }
  }
  return (
    <div className="card-description-box" id={props.id}>
      <h3>{props.id}</h3>
      <h4>{props.name}</h4>
      <h5>{facingText}</h5>
      <p className="desc-text">{props.desc}</p>
    </div>
  );
};

export function CardImages(props){
  let classes = `card-image card-itself rotate${props.facing}`
  return (
        <img 
          className={classes} 
          src={props.img} 
          alt={props.name} />
  )
}
