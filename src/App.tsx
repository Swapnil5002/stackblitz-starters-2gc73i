import { FC, useState, useRef, useEffect } from 'react';
import { Input } from './components/input/input.component';
import { Layout } from './components/layout/layout.component';
import './style.css';

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
  return (
    <div>
      <Layout
        title="Beer BANK"
        subTitle="Find your favourite beer here!"
        body={
          <Input
            inputRef={inputRef}
            type="text"
            placeholder="Search for Beer Name"
            value={inputVal}
            disabled={false}
            onChange={(e) => handleSearch(e)}
            classes="m-10"
          />
        }
      ></Layout>
    </div>
  );
};
