import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import { useTheme } from '../ThemeProvider';
import * as styles from './Button.css';
import type { ThemeType } from '../ThemeProvider';

type BaseButtonProps = {
  appearance?: 'text' | 'outlined' | 'tinted' | 'filled';
  ariaLabel?: string;
  children?: React.ReactNode;
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

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(
  (
    {
      appearance = 'text',
      shape = 'square',
      size = 'm',
      width = 'auto',
      layout = 'center',
      disabled = false,
      Icon,
      LeadingIcon,
      TrailingIcon,
      href,
      onClick,
      target,
      type = 'button',
      ariaLabel,
      children,
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme() as { theme: ThemeType };

    const buttonClass = classNames(
      styles.root,
      styles.shape[shape],
      styles.size[size],
      styles.width[width],
      {
        [styles.appearanceText[theme]]: appearance === 'text',
        [styles.appearanceOutlined[theme]]: appearance === 'outlined',
        [styles.appearanceTinted[theme]]: appearance === 'tinted',
        [styles.appearanceFilled[theme]]: appearance === 'filled',
        [styles.layoutCenter]: layout === 'center',
        [styles.hasLeadingIcon]: !!LeadingIcon,
        [styles.hasTrailingIcon]: !!TrailingIcon,
        [styles.iconOnly]: !!Icon,
        [styles.disabled]: disabled,
      }
    );

    const bodyClass = classNames(styles.body, styles.bodyLayout[layout]);
    const labelClass = styles.label;
    const mediaClass = classNames(styles.media, styles.mediaSize[size]);

    const ariaLabelText =
      ariaLabel || (Icon ? children?.toString() : undefined);

    const ButtonContent = (
      <>
        {Icon ? (
          <div className={mediaClass}>
            <Icon />
          </div>
        ) : (
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
        )}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={buttonClass}
          href={href}
          target={target}
          aria-label={ariaLabelText}
          onClick={(e: React.MouseEvent) => {
            if (disabled) {
              e.preventDefault();
            } else {
              onClick?.();
            }
          }}
          aria-disabled={disabled}
          {...props}
        >
          {ButtonContent}
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
        {ButtonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
