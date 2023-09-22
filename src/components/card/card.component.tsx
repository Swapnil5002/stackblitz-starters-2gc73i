import React from 'react';
import './card.component.style';

interface CardProps {
  image: string;
  cardTitle: string;
  cardSubtitle: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  cardTitle,
  cardSubtitle,
}) => {
  return (
    <div className="card-container">
      <img src={image} alt={image} className="image" />
      <p className="card-title">{cardTitle}</p>
      <p className="cards-sub-title">{cardSubtitle}</p>
    </div>
  );
};
