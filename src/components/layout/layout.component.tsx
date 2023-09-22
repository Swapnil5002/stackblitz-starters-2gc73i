import React from 'react';

interface LayoutProps {
  title: string;
  subTitle: string;
  body: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, subTitle, body }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
      </header>
      <body>{body}</body>
      <footer>This is Footer!</footer>
    </div>
  );
};
