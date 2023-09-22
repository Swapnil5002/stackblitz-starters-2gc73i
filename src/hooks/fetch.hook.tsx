import { useEffect, useState } from 'react';

const useHttp = (url, method = 'GET') => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useHttp;
