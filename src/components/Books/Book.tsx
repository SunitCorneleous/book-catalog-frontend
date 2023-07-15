const Book = () => {
  const data = {
    _id: '64b188e8b9eac33a606af318',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    publicationDate: '1954-1955',
    image:
      'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF894,1000_QL80_.jpg',
    reviews: [],
  };

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
