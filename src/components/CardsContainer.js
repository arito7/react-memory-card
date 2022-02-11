import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsContainer = (props) => {
  const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  `;
  return (
    <CardsWrapper>
      {props.items.map((item) => {
        return <Card item={item} />;
      })}
    </CardsWrapper>
  );
};

export default CardsContainer;
