import React from 'react';

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
  console.log(image, 'IMAGE__IMAGE');
  return (
    <div>
      <img src={image} alt={image} />
      <p>{cardTitle}</p>
      <p>{cardSubtitle}</p>
    </div>
  );
};
