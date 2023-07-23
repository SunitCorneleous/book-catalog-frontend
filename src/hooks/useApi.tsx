/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';

interface IData {
  data: {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    image: string;
    reviewData: [];
  };
}

interface IReviewData {
  _id: string;
  reivew: string;
  userId: string;
  bookId: string;
}

const useApi = (url: string) => {
  const [data, setData] = useState<IData | IReviewData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endPoint: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(url + endPoint);
      setData(response.data);
    } catch (e) {
      setError('error');
    }

    setIsLoading(false);
  };

  const postData = async (body: any, endPoint: string, options?: object) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url + endPoint, body, options);

      setData(response.data);

      return response.data;
    } catch (error) {
      setError('error');
    }

    setIsLoading(false);
  };

  return { data, isLoading, error, fetchData, postData };
};

export default useApi;
