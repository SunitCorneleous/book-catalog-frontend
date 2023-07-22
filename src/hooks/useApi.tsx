import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async endPoint => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url + endPoint);
      setData(response.data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const postData = async (body, endPoint) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url + endPoint, body);
      setData(response.data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, fetchData, postData };
};

export default useApi;
