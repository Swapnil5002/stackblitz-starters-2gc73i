import { FC, useState, useRef, useEffect } from 'react';
import { Card } from './components/card/card.component';
import { Input } from './components/input/input.component';
import { Layout } from './components/layout/layout.component';
import Loader from './components/loader/loader.component';
import { CONSTANTS, EndPoints } from './endpoints';
import './style.scss';
import { debounce } from './utils/debounce.utils';

export const App: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [screenData, setScreenData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(EndPoints.GET_BEER);
        const data = await response.json();
        setScreenData(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          EndPoints.GET_BEER + '?beer_name=' + inputVal
        );
        const data = await response.json();
        setScreenData(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    const debouncedFetchData = debounce(fetchData, CONSTANTS.debounceConst);
    inputVal && debouncedFetchData();
  }, [inputVal]);

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
                {loading ? (
                  <Loader />
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
