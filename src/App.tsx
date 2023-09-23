import { FC, useState, useRef, useEffect } from 'react';
import { Card } from './components/card/card.component';
import { Input } from './components/input/input.component';
import { Layout } from './components/layout/layout.component';
import { EndPoints } from './endpoints';
import useHttp from './hooks/fetch.hook';
import './style.scss';

export const App: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [screenData, setScreenData] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, isLoading: isBeerLoading } = useHttp(EndPoints.GET_BEER);
  useEffect(() => {
    console.log(data, 'DATA');
  }, [data]);
  useEffect(() => {
    setScreenData(data);
  }, [data]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  // useEffect(() => {
  //   const searchData = async () => {
  //     try {
  //       const { data, isLoading: isSearchLoading } = await useHttp(
  //         EndPoints.GET_BEER + '?beer_name=' + inputVal
  //       );
  //       setScreenData(data);
  //       setIsLoading(isSearchLoading);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   searchData();
  // }, [inputVal]);

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
        <div className="main-card-container">
          <div className="main-card-child">
            {screenData?.map((value, index) => (
              <div className="card" key={index}>
                {isBeerLoading ? (
                  <div className="shimmer-effect"></div>
                ) : (
                  <Card
                    cardTitle={value.name}
                    cardSubtitle={value.tagline}
                    image={value.image_url}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};
