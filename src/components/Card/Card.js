import React from 'react';
import './Card.css';
const Card = (props) => {
  const { item } = props;

  return (
    <div
      className="card-wrapper"
      onClick={() => {
        props.cardClickHandler(item);
      }}
    >
      <img src={item.src} alt={item.name} />
      <span>{item.name}</span>
    </div>
  );
};

export default Card;
