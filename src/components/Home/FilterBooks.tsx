import DropDownFilter from '../UI/DropDownFilter';
import SearchBox from '../UI/SearchBox';

type IFn = (event: { target: { value: string } }) => void;

type IProps = {
  filterHandler: IFn;
};

const FilterBooks = ({ filterHandler }: IProps) => {
  return (
    <div className='border-borderColor border-2 rounded-md w-[25%] h-max p-8'>
      <h1 className='text-xl font-semibold text-primary'>Filter books</h1>

      <SearchBox
        label='Search book'
        onChangeHandler={filterHandler}
        title={'search by book details...'}
      />

      <DropDownFilter />
    </div>
  );
};

export default FilterBooks;
