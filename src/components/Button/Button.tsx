import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';
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
  /**
   * Optional leading icon
   */
  LeadingIcon?: IconType;
  /**
   * Optional trailing icon
   */
  TrailingIcon?: IconType;
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
  LeadingIcon,
  TrailingIcon,
  ...props
}: ButtonProps) => {
  const rootClass = classNames(style.root, {
    [style.appearanceText]: appearance === 'text',
    [style.appearanceFilled]: appearance === 'filled',
    [style.appearanceOutlined]: appearance === 'outlined',
    [style.shapeSquare]: shape === 'square',
    [style.shapeCircle]: shape === 'circle',
    [style.sizeS]: size === 's',
    [style.sizeM]: size === 'm',
    [style.widthHug]: width === 'hug',
    [style.widthFull]: width === 'full',
    [style.widthHalf]: width === 'half',
    [style.widthThird]: width === 'third',
    [style.withLeading]: LeadingIcon != null,
    [style.withTrailing]: TrailingIcon != null,
  });
  const labelClass = style.label;
  const mediaClass = classNames(style.media, {
    [style.mediaSizeS]: size === 's',
    [style.mediaSizeM]: size === 'm',
  });

  if (href) {
    return (
      <a className={rootClass} href={href} {...props}>
        {LeadingIcon && (
          <div className={mediaClass}>
            <LeadingIcon />
          </div>
        )}
        <div className={labelClass}>{children}</div>
        {TrailingIcon && (
          <div className={mediaClass}>
            <TrailingIcon />
          </div>
        )}
      </a>
    );
  }

  return (
    <button type='button' className={rootClass} {...props}>
      {LeadingIcon && (
        <div className={mediaClass}>
          <LeadingIcon />
        </div>
      )}
      <div className={labelClass}>{children}</div>
      {TrailingIcon && (
        <div className={mediaClass}>
          <TrailingIcon />
        </div>
      )}
    </button>
  );
};

export default Button;
