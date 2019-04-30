import React from 'react';

export function CardDescriptions(props) {
  return (
    <div className="card-description-box" id={props.id}>
      <h3>{props.id}</h3>
      <h4>{props.name}</h4>
      <p className="desc-text">{props.desc}</p>
    </div>
  );
};

export function CardImages(props){
  let classes = `card-image rotate${props.facing}`
  return (
    <div className="card-image-container">
        <img className={classes} src={props.img} alt={props.name} />
    </div>
  )
}
