import React from 'react';
import './layout.component.style.scss';

interface LayoutProps {
  title: string;
  subTitle: string;
  mainBody: React.ReactNode;
  headerComponent: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  title,
  subTitle,
  mainBody,
  headerComponent,
}) => {
  return (
    <div>
      <header className="background ">
        <h1 className="title">{title}</h1>
        <h5 className="subtitle">{subTitle}</h5>
        <div className="header-component">{headerComponent}</div>
      </header>
      <div>{mainBody}</div>
      <footer>This is Footer!</footer>
    </div>
  );
};
