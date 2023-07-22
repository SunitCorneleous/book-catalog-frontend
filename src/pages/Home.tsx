import Book from '../components/Books/Book';
import Spinner from '../components/UI/Spinner';
import { useGetBooksQuery } from '../redux/api/apiSlice';
import { IBook } from '../types/globalTypes';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  let books = [];

  if (data?.data) {
    books = data.data;
  }

  console.log();

  if (isLoading) {
    return (
      <div className='h-[70vh] flex justify-center items-center'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='px-12'>
      <h2 className='text-2xl text-primary font-semibold mb-6'>
        Top 10 recently added books{' '}
      </h2>

      <div className='grid md:grid-cols-4 gap-4 w-full mx-auto'>
        {books.length &&
          [...books]
            .reverse()
            .slice(0, 10)
            .map((book: IBook, i: number) => <Book data={book} key={i} />)}
      </div>
    </div>
  );
};

export default Home;
