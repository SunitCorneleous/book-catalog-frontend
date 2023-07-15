import AllBooks from '../components/Home/AllBooks';
import FilterBooks from '../components/Home/FilterBooks';

const Home = () => {
  return (
    <div className='flex px-12'>
      <FilterBooks />
      <AllBooks />
    </div>
  );
};

export default Home;
