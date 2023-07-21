interface IProps {
  title: string;
  onChangeHandler: (event: { target: { value: string } }) => void;
  label: string;
}

const SearchBox = (props: IProps) => {
  return (
    <div className='mt-4'>
      <label className='text-primary'>{props.label}</label>
      <input
        onChange={props.onChangeHandler}
        type='text'
        className='mb-2 mt-1 py-2 block w-full rounded-lg border-borderColor text-lg'
        placeholder={props.title}
      />
    </div>
  );
};

export default SearchBox;
