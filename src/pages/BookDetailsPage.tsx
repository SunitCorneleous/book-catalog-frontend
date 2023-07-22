import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { BASE_URL } from '../constants/common';
import { useEffect } from 'react';

export default function BookDetailsPage() {
  const { id } = useParams();

  const { fetchData, data } = useApi(BASE_URL);

  const getData = async () => {
    await fetchData(`books/${id}`);
  };

  console.log(data?.data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='px-12'>
      <h2 className='text-2xl text-primary font-semibold mb-6'>
        Details on this book
      </h2>
      <div className='mt-8 flex-col flex md:flex-row justify-around'>
        <div className='md:flex md:flex-col md:justify-center '>
          <h1 className='text-primary font-bold text-3xl'>
            {data?.data.title}
          </h1>
          <p className='text-primary font-semibold text-xl mt-4'>
            Author: {data?.data.author}
          </p>
          <p className='text-primary font-semibold text-xl mt-4'>
            Genre: {data?.data.genre}
          </p>
          <p className='text-primary font-semibold text-xl mt-4'>
            Publication Date: {data?.data.publicationDate}
          </p>
        </div>
        <div className='md:w-[35%]'>
          <img
            src={data?.data?.image}
            alt='book image'
            className='md:w-[70%] rounded-md'
          />
        </div>
      </div>
      {/* //! TODO: Reviews */}
      <div></div>
    </div>
  );
}
