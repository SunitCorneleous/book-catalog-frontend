import SearchBox from '../UI/SearchBox';

const FilterBooks = () => {
  return (
    <div className='border-borderColor border-2 rounded-md w-[25%] p-8'>
      <h1 className='text-xl font-semibold text-primary'>Filter books</h1>

      <SearchBox title={'search books'} />
    </div>
  );
};

export default FilterBooks;
