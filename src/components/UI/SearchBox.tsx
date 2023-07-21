interface IProps {
  title: string;
}

const SearchBox = (props: IProps) => {
  return (
    <input
      type='text'
      className='my-2 py-2 block w-full rounded-lg border-borderColor text-lg'
      placeholder={props.title}
    />
  );
};

export default SearchBox;
