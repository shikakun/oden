import React from 'react';

export interface ButtonProps {
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button type='button' className='button' {...props}>
      {children}
    </button>
  );
};

export default Button;
