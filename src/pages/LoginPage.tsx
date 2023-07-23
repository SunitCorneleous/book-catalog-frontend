/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';
import { loginAsync } from '../redux/features/auth/authThunk';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const LoginPage = () => {
  const { isLoggedIn } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    /* @ts-ignore */
    dispatch(loginAsync({ email, password }));
  };

  if (isLoggedIn) {
    navigate('/');
  } else {
    return (
      <div className='h-[75vh] flex justify-center items-center '>
        <div className='border-2 border-borderColor w-[30%] p-8 rounded-lg shadow-md shadow-borderColor'>
          <h2 className='text-center text-primary text-2xl font-semibold'>
            Login
          </h2>
          <form onSubmit={loginHandler}>
            <div className='flex flex-col mt-6'>
              <label className='text-primary'>Email:</label>
              <input
                type='email'
                name='email'
                className='py-2 block w-full rounded-lg border-borderColor text-lg'
              />
            </div>
            <div className='flex flex-col mt-3'>
              <label className='text-primary'>Password:</label>
              <input
                type='password'
                name='password'
                className='py-2 block w-full rounded-lg border-borderColor text-lg'
              />
            </div>

            <Button type='submit' className='mt-4'>
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
};

export default LoginPage;
