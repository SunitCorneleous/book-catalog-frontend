/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react';
import Book from '../Books/Book';
import { IBook } from '../../types/globalTypes';

type IPropType = {
  data: IBook[];
};

const AllBooks = ({ data }: IPropType) => {
  return (
    <div className='flex-1 p-4border-borderColor border-2 rounded-md w-[60%] p-8 ml-4'>
      <h1 className='text-xl font-semibold text-primary'>Recent books</h1>

      {/* all books */}

      <div className='py-8 grid grid-cols-3 gap-9'>
        {data &&
          data.map((item: any, key: Key | null | undefined) => (
            <Book key={key} data={item} />
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
