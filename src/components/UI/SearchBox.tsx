interface IProps {
  title: string;
}

const SearchBox = (props: IProps) => {
  return (
    <input
      type='text'
      className='my-4 py-4 block w-full rounded-xl border-borderColor text-xl'
      placeholder={props.title}
    />
  );
};

export default SearchBox;
