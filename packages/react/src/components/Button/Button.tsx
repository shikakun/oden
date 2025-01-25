import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import * as styles from './Button.css';

type BaseButtonProps = {
  appearance?: 'text' | 'outlined' | 'tinted' | 'filled';
  children?: string;
  shape?: 'square' | 'circle';
  size?: 's' | 'm';
  width?: 'auto' | 'full' | 'half' | 'third';
  layout?: 'center' | 'start' | 'space-between';
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
  disabled?: boolean;
  onClick?: () => void;
};

type IconButtonProps = BaseButtonProps & {
  Icon: IconType;
  ariaLabel?: string;
};

type TextButtonProps = BaseButtonProps & {
  Icon?: never;
  ariaLabel?: string;
};

type AnchorElementProps = BaseButtonProps & {
  href: string;
  target?: string;
  type?: never;
};

type ButtonElementProps = BaseButtonProps & {
  href?: never;
  target?: never;
  type?: 'button' | 'submit' | 'reset';
};

export type ButtonProps =
  | (AnchorElementProps & (IconButtonProps | TextButtonProps))
  | (ButtonElementProps & (IconButtonProps | TextButtonProps));

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

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      appearance = 'text',
      children,
      shape = 'square',
      size = 'm',
      width = 'auto',
      layout = 'center',
      href,
      target,
      type = 'button',
      Icon,
      LeadingIcon,
      TrailingIcon,
      ariaLabel,
      disabled = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonClass = classNames(styles.root, {
      [styles.appearanceText]: appearance === 'text',
      [styles.appearanceOutlined]: appearance === 'outlined',
      [styles.appearanceTinted]: appearance === 'tinted',
      [styles.appearanceFilled]: appearance === 'filled',
      [styles.shapeSquare]: shape === 'square',
      [styles.shapeCircle]: shape === 'circle',
      [styles.sizeS]: size === 's',
      [styles.sizeM]: size === 'm',
      [styles.widthAuto]: width === 'auto',
      [styles.widthFull]: width === 'full',
      [styles.widthHalf]: width === 'half',
      [styles.widthThird]: width === 'third',
      [styles.layoutCenter]: layout === 'center',
      [styles.layoutStart]: layout === 'start',
      [styles.hasLeadingIcon]: !!LeadingIcon,
      [styles.hasTrailingIcon]: !!TrailingIcon,
      [styles.iconOnly]: !!Icon,
      [styles.disabled]: disabled,
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

    const ariaLabelText = ariaLabel || (Icon ? children : undefined);

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={buttonClass}
          href={href}
          target={target}
          aria-label={ariaLabelText}
          onClick={(e: React.MouseEvent): void => {
            if (disabled) {
              e.preventDefault();
            } else if (onClick) {
              onClick();
            }
          }}
          aria-disabled={disabled}
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
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={buttonClass}
        aria-label={ariaLabelText}
        disabled={disabled}
        onClick={onClick}
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
  }
);

Button.displayName = 'Button';

export default Button;
