import { ReactNode } from "react";

type IPropType = {
  children: ReactNode;
  className?: string;
  onClickHandler?: () => void;
};

function ActionButton({ children, className, onClickHandler }: IPropType) {
  return (
    <button
      onClick={onClickHandler}
      className={`bg-primary text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}

export default ActionButton;
