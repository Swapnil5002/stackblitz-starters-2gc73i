import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [input, setInput] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setInput(value);
    }, delay);
    return () => clearInterval(handler);
  }, [value, delay]);
  return input;
};
