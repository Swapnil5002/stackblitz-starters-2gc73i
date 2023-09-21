import { FC, useState } from 'react';
import { Input } from './components/input/input.component';

import './style.css';

export const App: FC = () => {
  const [inputVal, setInputVal] = useState('');
  const handleSearch = (e) => {
    let val = e.target.value;
    setInputVal(val);
  };
  return (
    <div>
      Beer BANK
      <Input
        type="text"
        placeholder="Search for Beer Name"
        value={inputVal}
        disabled={false}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
