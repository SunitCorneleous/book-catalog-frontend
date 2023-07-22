import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import Button from '../components/UI/Button';
import axios from 'axios';
import { BASE_URL } from '../constants/common';
import { toast } from 'react-toastify';

export default function AddNewBookPage() {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  const navigate = useNavigate();

  const addBookHandler: React.FormEventHandler = async e => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publication = form.publication.value;
    const image = form.image.value;

    const result = await axios.post(
      `${BASE_URL}/books/add-book`,
      {
        title,
        author,
        genre,
        publicationDate: publication,
        image,
      },
      {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      }
    );

    if (result.status === 200) {
      const toastMessage = result.data.message;
      toast(toastMessage);

      form.reset();
    }
  };

  if (!isLoggedIn) {
    navigate('/');
  } else {
    return (
      <div className='h-[75vh] px-12'>
        <h1 className='text-center text-2xl text-primary font-semibold'>
          Add New Book
        </h1>

        <form onSubmit={addBookHandler} className='md:w-[450px] mx-auto'>
          {/* title */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Title:</label>
            <input
              name='title'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* author */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Author:</label>
            <input
              name='author'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* genre */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Genre:</label>
            <input
              name='genre'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* publication date */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Publication Date:</label>
            <input
              name='publication'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* image */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Image:</label>
            <input
              name='image'
              className='py-2 block w-full rounded-lg border-borderColor text-lg '
            />
          </div>

          <Button type='submit' className='mt-6 block mx-auto'>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
