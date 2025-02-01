import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import * as styles from './Button.css';

type BaseButtonProps = {
  appearance?: 'text' | 'outlined' | 'tinted' | 'filled';
  ariaLabel?: string;
  children: string;
  disabled?: boolean;
  Icon?: IconType;
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
  layout?: 'center' | 'start' | 'space-between';
  onClick?: () => void;
  shape?: 'square' | 'circle';
  size?: 's' | 'm';
  width?: 'auto' | 'full' | 'half' | 'third';
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

export type ButtonProps = AnchorElementProps | ButtonElementProps;

type ContentProps = {
  bodyClass: string;
  children: React.ReactNode;
  Icon?: IconType;
  LeadingIcon?: IconType;
  TrailingIcon?: IconType;
  labelClass: string;
  mediaClass: string;
};

const ButtonContent: React.FC<ContentProps> = ({
  bodyClass,
  children,
  Icon,
  LeadingIcon,
  TrailingIcon,
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
      ariaLabel,
      children,
      disabled = false,
      href,
      Icon,
      LeadingIcon,
      TrailingIcon,
      layout = 'center',
      onClick,
      shape = 'square',
      size = 'm',
      target,
      type = 'button',
      width = 'auto',
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
