import { Link, useNavigate, useParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { BASE_URL } from '../constants/common';
import { useEffect } from 'react';
import ActionButton from '../components/UI/ActionButton';
import { useState } from 'react';
import ConfirmModal from '../components/UI/ConfirmModal';
import { createPortal } from 'react-dom';
import { useAppSelector } from '../redux/hooks';
import Button from '../components/UI/Button';
import { toast } from 'react-toastify';
import { FaListUl } from 'react-icons/fa';
import axios from 'axios';

export default function BookDetailsPage() {
  const { isLoggedIn, user } = useAppSelector(state => state.auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { fetchData, data } = useApi(BASE_URL);
  const { fetchData: getReviews, data: reviewData } = useApi(BASE_URL);
  const { postData: postReview, data: reviewPostData } = useApi(BASE_URL);

  const getData = async () => {
    await fetchData(`books/${id}`);

    await getReviews(`reviews/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const navigateToEditPageHandler = () => {
    navigate(`/edit-book`, { state: data?.data });
  };

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleReview = async e => {
    e.preventDefault();

    const form = e.target;

    const review = form.review.value;

    const userReviewData = {
      review,
      userId: user._id,
      bookId: id,
    };

    const result = await postReview(userReviewData, '/reviews', {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    });

    toast.success(result?.message);
  };

  const addToWishList = async () => {
    const response = await axios.patch(
      `${BASE_URL}/wish-list/${user._id}`,
      { bookId: id },
      {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      }
    );

    toast.success(response.data.message);
  };

  return (
    <div className='px-12'>
      <h2 className='text-2xl text-primary font-semibold mb-6'>
        Details on this book
      </h2>
      <div className='mt-8 flex-col flex md:flex-row justify-around'>
        <div className='md:flex md:flex-col md:justify-center '>
          <h1 className='text-primary font-bold text-3xl'>
            {data?.data.title}
          </h1>
          <p className='text-primary font-semibold text-xl mt-4'>
            Author: {data?.data.author}
          </p>
          <p className='text-primary font-semibold text-xl mt-4'>
            Genre: {data?.data.genre}
          </p>
          <p className='text-primary font-semibold text-xl mt-4'>
            Publication Date: {data?.data.publicationDate}
          </p>

          {isLoggedIn && (
            <div className='mt-8'>
              <FaListUl
                onClick={addToWishList}
                size={25}
                className='text-primary cursor-pointer'
                title='add to wish list'
              />
            </div>
          )}

          {isLoggedIn && (
            <div className='mt-8'>
              <ActionButton
                onClickHandler={navigateToEditPageHandler}
                className='mr-4'
              >
                Edit
              </ActionButton>

              <ActionButton onClickHandler={modalHandler}>Delete</ActionButton>
            </div>
          )}
        </div>
        <div className='md:w-[35%]'>
          <img
            src={data?.data?.image}
            alt='book image'
            className='md:w-[70%] rounded-md'
          />
        </div>
      </div>
      {/* //! TODO: Reviews */}
      <div className='mt-8 flex justify-between px-12'>
        {isLoggedIn && (
          <div>
            <h1 className='text-center text-lg text-primary font-semibold'>
              Leave a review to recommend other readers
            </h1>

            <form onSubmit={handleReview}>
              <div className='flex flex-col mt-6'>
                <label className='text-primary'>Enter review here:</label>
                <input
                  name='review'
                  className='py-2 block w-full rounded-lg border-borderColor text-lg'
                />
              </div>
              <Button type='submit' className='mt-4'>
                Submit
              </Button>
            </form>
          </div>
        )}
        <div>
          {/* review */}
          {reviewData?.data.map((item, i) => (
            <div className='mb-4' key={i}>
              <p className='text-primary text-xl font-semibold'>
                {item?.review}
              </p>
              <p className='text-primary text-base '>
                ~ {item?.userId?.name?.firstName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isOpen &&
        createPortal(
          <ConfirmModal modalHandler={modalHandler} />,
          document.getElementById('portal')
        )}
    </div>
  );
}
