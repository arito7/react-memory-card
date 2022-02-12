import React from 'react';
import Card from './Card';
import './CardsContainer.css';
const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.items.map((item) => {
        return (
          <Card
            key={item.name}
            item={item}
            cardClickHandler={props.cardClickHandler}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
