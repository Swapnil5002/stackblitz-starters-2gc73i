import React from 'react';
import './layout.component.style.scss';

interface LayoutProps {
  title: string;
  subTitle: string;
  body: React.ReactNode;
  headerComponent: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  subTitle,
  body,
  headerComponent,
}) => {
  return (
    <div>
      <header className="background">
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
        <div>{headerComponent}</div>
      </header>
      <body>{body}</body>
      <footer>This is Footer!</footer>
    </div>
  );
};
