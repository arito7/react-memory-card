import React from 'react';
import styled from 'styled-components';
const Card = (props) => {
  const CardWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 1rem;
    grid-template-rows: 5fr 1fr;
    grid-template-columns: 1fr;
    padding-bottom: -2rem;
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
  `;

  const { item } = props;

  return (
    <CardWrapper className="card">
      <Img src={item.src} alt={item.name} />
      <span>{item.name}</span>
    </CardWrapper>
  );
};

export default Card;
