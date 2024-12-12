import classNames from 'classnames';
import React from 'react';
import * as style from './Button.css';

export interface ButtonBaseProps {
  /**
   * Button appearance
   */
  appearance?: 'text' | 'filled' | 'outlined';
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Button shape
   */
  shape?: 'square' | 'circle';
  /**
   * Button size
   */
  size?: 's' | 'm';
  /**
   * Button width
   */
  width?: 'hug' | 'full' | 'half' | 'third';
}

export interface LinkButtonProps extends ButtonBaseProps {
  /**
   * Optional href
   */
  href: string;
  /**
   * Optional target
   */
  target?: string;
  onClick?: never;
}

export interface ClickButtonProps extends ButtonBaseProps {
  href?: never;
  target?: never;
  onClick: () => void;
}

export type ButtonProps = LinkButtonProps | ClickButtonProps;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  appearance = 'text',
  children,
  shape = 'square',
  size = 'm',
  width = 'hug',
  href,
  ...props
}: ButtonProps) => {
  const rootClass = classNames(style.root, {
    [style.appearanceText]: appearance === 'text',
    [style.appearanceFilled]: appearance === 'filled',
    [style.appearanceOutlined]: appearance === 'outlined',
    [style.shapeSquare]: shape === 'square',
    [style.shapeCircle]: shape === 'circle',
    [style.sizeXS]: size === 'xs',
    [style.sizeS]: size === 's',
    [style.sizeM]: size === 'm',
    [style.sizeL]: size === 'l',
    [style.widthHug]: width === 'hug',
    [style.widthFull]: width === 'full',
    [style.widthHalf]: width === 'half',
    [style.widthThird]: width === 'third',
  });
  const labelClass = style.label;

  if (href) {
    return (
      <a className={rootClass} href={href} {...props}>
        <div className={labelClass}>{children}</div>
      </a>
    );
  }

  return (
    <button type='button' className={rootClass} {...props}>
      <div className={labelClass}>{children}</div>
    </button>
  );
};

export default Button;
