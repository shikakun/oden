import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';
import * as styles from './Button.css';

type BaseButtonProps = {
  appearance?: 'text' | 'outlined' | 'tinted' | 'filled';
  children?: string;
  shape?: 'square' | 'circle';
  size?: 's' | 'm';
  width?: 'hug' | 'full' | 'half' | 'third';
  layout?: 'center' | 'start' | 'space-between';
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
};

type IconButtonProps = BaseButtonProps & {
  Icon: IconType;
  ariaLabel: string;
};

type TextButtonProps = BaseButtonProps & {
  Icon?: never;
  ariaLabel?: string;
};

type LinkProps = BaseButtonProps & {
  href: string;
  target?: string;
  onClick?: never;
};

type ClickProps = BaseButtonProps & {
  href?: never;
  target?: never;
  onClick?: () => void;
};

export type ButtonProps =
  | (LinkProps & (IconButtonProps | TextButtonProps))
  | (ClickProps & (IconButtonProps | TextButtonProps));

type ContentProps = {
  Icon?: IconType;
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
  children: React.ReactNode;
  bodyClass: string;
  labelClass: string;
  mediaClass: string;
};

const ButtonContent: React.FC<ContentProps> = ({
  Icon,
  LeadingIcon,
  TrailingIcon,
  children,
  bodyClass,
  labelClass,
  mediaClass,
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
      <div className={bodyClass}>
        {LeadingIcon && (
          <div className={mediaClass}>
            <LeadingIcon />
          </div>
        )}
        <div className={labelClass}>{children}</div>
      </div>
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
  layout = 'center',
  href,
  Icon,
  LeadingIcon,
  TrailingIcon,
  ariaLabel,
  ...props
}) => {
  const buttonClass = classNames(styles.root, {
    [styles.appearanceText]: appearance === 'text',
    [styles.appearanceOutlined]: appearance === 'outlined',
    [styles.appearanceTinted]: appearance === 'tinted',
    [styles.appearanceFilled]: appearance === 'filled',
    [styles.shapeSquare]: shape === 'square',
    [styles.shapeCircle]: shape === 'circle',
    [styles.sizeS]: size === 's',
    [styles.sizeM]: size === 'm',
    [styles.widthHug]: width === 'hug',
    [styles.widthFull]: width === 'full',
    [styles.widthHalf]: width === 'half',
    [styles.widthThird]: width === 'third',
    [styles.layoutCenter]: layout === 'center',
    [styles.layoutStart]: layout === 'start',
    [styles.hasLeadingIcon]: !!LeadingIcon,
    [styles.hasTrailingIcon]: !!TrailingIcon,
    [styles.iconOnly]: !!Icon,
  });
  const bodyClass = classNames(styles.body, {
    [styles.bodyLayoutCenter]: layout === 'center',
    [styles.bodyLayoutStart]: layout === 'start',
    [styles.bodyLayoutSpaceBetween]: layout === 'space-between',
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
          labelClass={labelClass}
          bodyClass={bodyClass}
          mediaClass={mediaClass}
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
        bodyClass={bodyClass}
        labelClass={labelClass}
        mediaClass={mediaClass}
      >
        {children}
      </ButtonContent>
    </button>
  );
};

export default Button;
