import AllBooks from '../components/Home/AllBooks';
import FilterBooks from '../components/Home/FilterBooks';
import Spinner from '../components/UI/Spinner';
import { useGetBooksQuery } from '../redux/api/apiSlice';
import { setBookSearch } from '../redux/features/bookSearch/bookSearchSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IBook } from '../types/globalTypes';

export default function AllBooksPage() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const { keyword } = useAppSelector(state => state.bookSearch);
  const { genre, year } = useAppSelector(state => state.bookFilter);

  const dispatch = useAppDispatch();

  const handleFilterChange = (event: { target: { value: string } }) => {
    const { value } = event.target;
    dispatch(setBookSearch(value));
  };

  let bookData = data?.data;

  if (keyword && bookData) {
    bookData = data?.data.filter((book: IBook) => {
      const title = book.title.toLowerCase().includes(keyword.toLowerCase());
      const author = book.author.toLowerCase().includes(keyword.toLowerCase());
      const genre = book.genre.toLowerCase().includes(keyword.toLowerCase());

      return title || author || genre;
    });
  }

  if (genre && bookData) {
    bookData = data?.data.filter((book: IBook) =>
      book.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  if (year && bookData.length) {
    bookData = bookData.filter((book: IBook) =>
      book.publicationDate.toLowerCase().includes(year.toLowerCase())
    );
  }

  return (
    <div className='flex px-12'>
      <FilterBooks filterHandler={handleFilterChange} />
      {!isLoading ? (
        <AllBooks data={bookData} />
      ) : (
        <div className='w-full h-[50vh] flex items-center justify-center'>
          <Spinner />
        </div>
      )}
    </div>
  );
}
