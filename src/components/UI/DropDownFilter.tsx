import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {
  setBookGenre,
  setBookYear,
} from '../../redux/features/bookFilter/bookFilterSlice';

const DropDownFilter = () => {
  const [filterType, setFilterType] = useState<string>('genre');

  const genreArr = [
    'Action and Adventure',
    'Biography',
    'Children',
    'Comics and Graphic Novels',
    'Crime and Detective',
    'Drama',
    'Fantasy',
    'Historical Fiction',
    'Horror',
    'Humor',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Self-Help',
    'Thriller',
  ];

  const dispatch = useAppDispatch();

  const setFilterHandler: React.ChangeEventHandler<HTMLSelectElement> = e => {
    setFilterType(e.target.value);
  };

  const selectGenreHandler: React.ChangeEventHandler<HTMLSelectElement> = e => {
    dispatch(setBookGenre(e.target.value));
  };

  const searchHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setBookYear(e.target.value));
  };

  const selectGenre = (
    <select
      name='filter-books-select'
      id='books'
      className='mb-2 mt-1 py-2 block w-full rounded-lg border-borderColor text-lg'
      onChange={selectGenreHandler}
    >
      {genreArr.map((value, i) => (
        <option key={i} value={value.toLowerCase()}>
          {value}
        </option>
      ))}
    </select>
  );

  const filterYear = (
    <>
      <input
        onChange={searchHandler}
        type='text'
        className='mb-2 mt-1 py-2 block w-full rounded-lg border-borderColor text-lg'
        placeholder='search by year, exp: 1990 '
      />
    </>
  );

  return (
    <div className='mt-2'>
      <label className='text-primary'>Filter by</label>

      <div>
        <select
          onChange={setFilterHandler}
          name='filter-books-select'
          id='books'
          className='mb-2 mt-1 py-2 block w-full rounded-lg border-borderColor text-lg'
        >
          <option value='genre'>Genre</option>
          <option value='year'>Year</option>
        </select>

        {filterType === 'year' ? filterYear : selectGenre}
      </div>
    </div>
  );
};

export default DropDownFilter;
