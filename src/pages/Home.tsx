import AllBooks from '../components/Home/AllBooks';
import FilterBooks from '../components/Home/FilterBooks';
import Spinner from '../components/UI/Spinner';
import { useGetBooksQuery } from '../redux/api/apiSlice';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  console.log(data);

  return (
    <div className='flex px-12'>
      <FilterBooks />
      {!isLoading ? (
        <AllBooks data={data.data} />
      ) : (
        <div className='w-full h-[50vh] flex items-center justify-center'>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Home;
