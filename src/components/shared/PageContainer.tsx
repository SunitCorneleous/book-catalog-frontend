import { ReactNode } from 'react';

interface IProp {
  children: ReactNode;
}

function PageContainer({ children }: IProp) {
  return <div className='pb-12'>{children}</div>;
}

export default PageContainer;
