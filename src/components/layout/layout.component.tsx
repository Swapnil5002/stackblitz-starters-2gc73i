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
      <header className="background ">
        <h1 className="title">{title}</h1>
        <h5 className="subtitle">{subTitle}</h5>
        <div className="header-component">{headerComponent}</div>
      </header>
      <body className="body">{body}</body>
      <footer>This is Footer!</footer>
    </div>
  );
};
