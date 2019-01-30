import React from 'react';

import './card.css';

export default function Card(props) {
  return (
    <div className="card" id={props.id}>
      {props.name}
    </div>
  );
};