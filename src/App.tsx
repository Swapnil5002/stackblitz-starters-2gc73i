import { FC, useState, useRef, useEffect } from 'react';
import { Input } from './components/input/input.component';

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
      <h1>Beer BANK</h1>
      <h5>Find your favourite beer here!</h5>
      <Input
        inputRef={inputRef}
        type="text"
        placeholder="Search for Beer Name"
        value={inputVal}
        disabled={false}
        onChange={(e) => handleSearch(e)}
        classes="bold"
      />
    </div>
  );
};
