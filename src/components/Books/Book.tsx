import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Book = ({ data }) => {
  return (
    <Link to={`/book-details/${data._id}`}>
      <motion.div
        className='w-72 mx-auto cursor-pointer shadow-md shadow-borderColor rounded-md'
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <img
            className='w-full rounded-md h-[370px] object-fill'
            src={data.image}
            alt='book cover'
          />
        </div>

        <div className='p-2 mt-2'>
          <h3 className='text-primary font-bold text-lg'>{data.title}</h3>
          <p className='text-primary font-semibold text-base'>{data.author}</p>

          <div className='flex justify-between'>
            <p className='text-primary font-semibold text-base'>{data.genre}</p>

            <p className='text-primary font-semibold text-base'>
              {data.publicationDate}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Book;
