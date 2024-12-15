import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';
import * as styles from './Button.css';

export interface BaseButtonProps {
  appearance?: 'text' | 'filled' | 'outlined';
  children?: React.ReactNode;
  shape?: 'square' | 'circle';
  size?: 's' | 'm';
  width?: 'hug' | 'full' | 'half' | 'third';
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
}

export interface IconButtonProps extends BaseButtonProps {
  Icon: IconType;
  ariaLabel: string;
}

export interface TextButtonProps extends BaseButtonProps {
  Icon?: never;
  ariaLabel?: string;
}

export interface LinkProps extends BaseButtonProps {
  href: string;
  target?: string;
  onClick?: never;
}

export interface ClickProps extends BaseButtonProps {
  href?: never;
  target?: never;
  onClick?: () => void;
}

export type ButtonProps =
  | (LinkProps & (IconButtonProps | TextButtonProps))
  | (ClickProps & (IconButtonProps | TextButtonProps));

interface ContentProps {
  Icon?: IconType;
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
  children: React.ReactNode;
  mediaClass: string;
  labelClass: string;
}

const ButtonContent: React.FC<ContentProps> = ({
  Icon,
  LeadingIcon,
  TrailingIcon,
  children,
  mediaClass,
  labelClass,
}) => {
  if (Icon) {
    return (
      <div className={mediaClass}>
        <Icon />
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({
  appearance = 'text',
  children,
  shape = 'square',
  size = 'm',
  width = 'hug',
  href,
  Icon,
  LeadingIcon,
  TrailingIcon,
  ariaLabel,
  ...props
}) => {
  const buttonClass = classNames(styles.root, {
    [styles.appearanceText]: appearance === 'text',
    [styles.appearanceFilled]: appearance === 'filled',
    [styles.appearanceOutlined]: appearance === 'outlined',
    [styles.shapeSquare]: shape === 'square',
    [styles.shapeCircle]: shape === 'circle',
    [styles.sizeS]: size === 's',
    [styles.sizeM]: size === 'm',
    [styles.widthHug]: width === 'hug',
    [styles.widthFull]: width === 'full',
    [styles.widthHalf]: width === 'half',
    [styles.widthThird]: width === 'third',
    [styles.hasLeadingIcon]: !!LeadingIcon,
    [styles.hasTrailingIcon]: !!TrailingIcon,
    [styles.iconOnly]: !!Icon,
  });

  const labelClass = styles.label;
  const mediaClass = classNames(styles.media, {
    [styles.mediaSizeS]: size === 's',
    [styles.mediaSizeM]: size === 'm',
  });
  const ariaLabelText = ariaLabel || (Icon ? children?.toString() : undefined);

  if (href) {
    return (
      <a
        className={buttonClass}
        href={href}
        aria-label={ariaLabelText}
        {...props}
      >
        <ButtonContent
          Icon={Icon}
          LeadingIcon={LeadingIcon}
          TrailingIcon={TrailingIcon}
          mediaClass={mediaClass}
          labelClass={labelClass}
        >
          {children}
        </ButtonContent>
      </a>
    );
  }

  return (
    <button
      type='button'
      className={buttonClass}
      aria-label={ariaLabelText}
      {...props}
    >
      <ButtonContent
        Icon={Icon}
        LeadingIcon={LeadingIcon}
        TrailingIcon={TrailingIcon}
        mediaClass={mediaClass}
        labelClass={labelClass}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

export default Button;
