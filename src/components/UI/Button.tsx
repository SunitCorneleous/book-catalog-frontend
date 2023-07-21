import { ReactNode } from 'react';

type IPropType = {
  children: ReactNode;
  className: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

function Button({ children, className, type }: IPropType) {
  return (
    <button
      type={type}
      className={`bg-primary text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
