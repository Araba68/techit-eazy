import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'px-6 py-3 font-semibold rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#3F8EFC] text-white hover:bg-blue-600 focus:ring-[#3F8EFC]',
    secondary: 'bg-white text-[#3F8EFC] border border-[#3F8EFC] hover:bg-blue-50 focus:ring-[#3F8EFC]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
