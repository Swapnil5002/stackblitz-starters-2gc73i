import { useEffect, useState } from 'react';

interface UrlProps {
  url: string;
}

const useHttp = ({ url }: UrlProps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCall = async () => {
      try {
        const resp = await fetch(url);
        const responseData = await resp.json();
        if (responseData?.status !== 'success') {
          setLoading(true);
        }
        setLoading(false);
        setData(responseData);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchCall();
  }, [url]);
  return { data, error, isLoading };
};
export default useHttp;
