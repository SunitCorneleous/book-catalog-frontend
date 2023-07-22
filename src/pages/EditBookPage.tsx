import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { BASE_URL } from '../constants/common';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAppSelector } from '../redux/hooks';

function EditBookPage() {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  const addBookHandler: React.FormEventHandler = async e => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const publication = form.publication.value;
    const image = form.image.value;

    const result = await axios.patch(
      `${BASE_URL}/books/${state._id}`,
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

      navigate('/all-books');
    }
  };

  if (!isLoggedIn) {
    return navigate('/all-books');
  } else {
    return (
      <div className='px-12'>
        {' '}
        <h1 className='text-center text-2xl text-primary font-semibold'>
          Add New Book
        </h1>
        <form onSubmit={addBookHandler} className='md:w-[450px] mx-auto'>
          {/* title */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Title:</label>
            <input
              defaultValue={state.title}
              name='title'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* author */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Author:</label>
            <input
              defaultValue={state.author}
              name='author'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* genre */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Genre:</label>
            <input
              defaultValue={state.genre}
              name='genre'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* publication date */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Publication Date:</label>
            <input
              defaultValue={state.publicationDate}
              name='publication'
              className='py-2 block w-full rounded-lg border-borderColor text-lg'
            />
          </div>
          {/* image */}
          <div className='flex flex-col mt-6'>
            <label className='text-primary'>Image:</label>
            <input
              defaultValue={state.image}
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

export default EditBookPage;
