import { useEffect, useState } from 'react';

interface UrlProps {
  url: string;
}

const useHttp = ({ url }: UrlProps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchCall = async () => {
      try {
        const resp = await fetch(url);
        const responseData = await resp.json();
        setData(responseData);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchCall();
  }, [url]);
  return { data, error };
};
export default useHttp;
