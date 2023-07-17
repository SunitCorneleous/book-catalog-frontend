const Book = ({ data }) => {
  return (
    <div className='w-80 cursor-pointer shadow-md hover:shadow-xl shadow-borderColor rounded-md'>
      <div>
        <img className='w-full rounded-md' src={data.image} alt='book cover' />
      </div>

      <div className='p-2'>
        <h3 className='text-primary font-bold text-2xl'>{data.title}</h3>
        <p className='text-primary font-semibold text-lg'>{data.author}</p>

        <div className='flex justify-between'>
          <p className='text-primary font-semibold text-lg'>{data.genre}</p>

          <p className='text-primary font-semibold text-base'>
            {data.publicationDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
