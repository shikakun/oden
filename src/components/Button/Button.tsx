import React from 'react';
import * as style from './Button.css';

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
    <button type='button' className={style.root} {...props}>
      {children}
    </button>
  );
};

export default Button;
