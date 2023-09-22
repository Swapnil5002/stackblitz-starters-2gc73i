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
  return <div>This is Modal</div>;
};
