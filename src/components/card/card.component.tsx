import React from 'react';
import './card.component.style';

interface CardProps {
  image: string;
  cardTitle: string;
  cardSubtitle: string;
  onClick: (value: any) => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  cardTitle,
  cardSubtitle,
  onClick,
}) => {
  return (
    <>
      <div className="card-container" onClick={onClick}>
        <img src={image} alt="alt-image" className="image" loading="lazy" />
        <p className="card-title">{cardTitle}</p>
        <p className="cards-sub-title">{cardSubtitle}</p>
      </div>
    </>
  );
};
