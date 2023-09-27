import { FC, useRef, useEffect, useState } from 'react';
import { Card } from './components/card/card.component';
import { Input } from './components/input/input.component';
import { Layout } from './components/layout/layout.component';
import Loader from './components/loader/loader.component';
import { Modal } from './components/modal/modal.component';
import { CONSTANTS, EndPoints } from './endpoints';
import './style.scss';
import { useDebounce } from './utils/debounce.hook';

export const App: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [screenData, setScreenData] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceVal = useDebounce(inputVal, CONSTANTS.debounceConst);

  const handleSearch = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    inputRef?.current?.focus();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(EndPoints.GET_BEER);
        const data = await response.json();
        if (data) {
          setScreenData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
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
        if (data) {
          setScreenData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    debounceVal && fetchData();
  }, [debounceVal]);

  const handleClick = (e, beerData) => {
    setOpen(true);
    setData(beerData);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <Layout
      title="The Beer Bank"
      subTitle="Find your favourite beer here"
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
          {open && <Modal modalData={data} modalOpen={open} />}
          {loading ? (
            <Loader />
          ) : (
            <div className="main-card-container">
              <div className="main-card-child">
                {screenData?.map((value, index) => (
                  <div className="card" key={index}>
                    <Card
                      cardTitle={value.name}
                      cardSubtitle={value.tagline}
                      image={value.image_url}
                      onClick={(e) => handleClick(e, value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      }
    />
  );
};
