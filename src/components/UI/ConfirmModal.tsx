/* eslint-disable @typescript-eslint/ban-types */
import { motion } from 'framer-motion';
import ActionButton from './ActionButton';
import axios from 'axios';
import { BASE_URL } from '../../constants/common';
import { useNavigate } from 'react-router';

interface IProp {
  modalHandler: React.MouseEventHandler<HTMLButtonElement>;
  bookId: string | undefined;
}

function ConfirmModal({ modalHandler, bookId }: IProp) {
  const navigate = useNavigate();

  const deleteBookHandler = async bookId => {
    const result = await axios.delete(`${BASE_URL}/books/${bookId}`);

    console.log(result);
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='absolute inset-0 bg-blue-400 bg-opacity-40 flex justify-center items-center'
    >
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 1 }}
        className='relative min-w-[500px] min-h-[300px] bg-white rounded-lg flex flex-col justify-center items-center shadow-black shadow-md'
      >
        <h1 className='text-primary font-semibold text-xl'>
          Are you sure you want to delete this book?
        </h1>

        <div className='mt-4'>
          <ActionButton
            className='mr-4'
            onClickHandler={() => deleteBookHandler(bookId)}
          >
            Confirm
          </ActionButton>
          <ActionButton onClickHandler={modalHandler}>Cancel</ActionButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ConfirmModal;
