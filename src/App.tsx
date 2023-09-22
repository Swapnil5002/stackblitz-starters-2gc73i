import { FC, useState, useRef, useEffect } from 'react';
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
  const { data, error } = useHttp('https://api.punkapi.com/v2/beers');
  console.log(data, 'DATA');
  console.log(error, 'ERROR');

  return (
    <div>
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
        body={<></>}
      ></Layout>
    </div>
  );
};
