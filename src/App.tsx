import React, { FC, useState, useRef, useEffect } from 'react';
import { Card } from './components/card/card.component';
import { Input } from './components/input/input.component';
import { Layout } from './components/layout/layout.component';
import useHttp from './hooks/fetch.hook';
import './style.scss';

export const App: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  const handleSearch = (e) => {
    let val = e.target.value;
    setInputVal(val);
  };
  const { data, error, isLoading } = useHttp(
    'https://api.punkapi.com/v2/beers',
    'GET'
  );
  return (
    <Layout
      title="Beer Bank"
      subTitle="Find your favourite beer here!"
      headerComponent={
        <Input
          inputRef={inputRef}
          type="text"
          placeholder="Search for Beer Name"
          value={inputVal}
          disabled={false}
          onChange={(e) => handleSearch(e)}
          classes="search-bar"
        />
      }
      mainBody={
        <>
          {data.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  cardTitle={value.name}
                  cardSubtitle={value.tagline}
                  image={value.image_url}
                />
                ;
              </React.Fragment>
            );
          })}
        </>
      }
    ></Layout>
  );
};
