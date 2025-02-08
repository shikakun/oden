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
  color?: 'default' | 'muted' | 'interactive' | 'negative';
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
      ariaLabel,
      children,
      color = 'default',
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
    const { theme } = useTheme() as { theme: ThemeType };

    const buttonClass = classNames(
      styles.root,
      styles.rootOverlay[theme],
      styles.shape[shape],
      styles.size[size],
      styles.width[width],
      {
        [styles.appearanceText]: appearance === 'text',
        [styles.appearanceTextDefault[theme]]:
          appearance === 'text' && color === 'default',
        [styles.appearanceTextMuted[theme]]:
          appearance === 'text' && color === 'muted',
        [styles.appearanceTextInteractive[theme]]:
          appearance === 'text' && color === 'interactive',
        [styles.appearanceTextNegative[theme]]:
          appearance === 'text' && color === 'negative',
        [styles.appearanceOutlined[theme]]: appearance === 'outlined',
        [styles.appearanceOutlinedDefault[theme]]:
          appearance === 'outlined' && color === 'default',
        [styles.appearanceOutlinedMuted[theme]]:
          appearance === 'outlined' && color === 'muted',
        [styles.appearanceOutlinedInteractive[theme]]:
          appearance === 'outlined' && color === 'interactive',
        [styles.appearanceOutlinedNegative[theme]]:
          appearance === 'outlined' && color === 'negative',
        [styles.appearanceTintedDefault[theme]]:
          appearance === 'tinted' && color === 'default',
        [styles.appearanceTintedMuted[theme]]:
          appearance === 'tinted' && color === 'muted',
        [styles.appearanceTintedInteractive[theme]]:
          appearance === 'tinted' && color === 'interactive',
        [styles.appearanceTintedNegative[theme]]:
          appearance === 'tinted' && color === 'negative',
        [styles.appearanceFilledDefault[theme]]:
          appearance === 'filled' && color === 'default',
        [styles.appearanceFilledMuted[theme]]:
          appearance === 'filled' && color === 'muted',
        [styles.appearanceFilledInteractive[theme]]:
          appearance === 'filled' && color === 'interactive',
        [styles.appearanceFilledNegative[theme]]:
          appearance === 'filled' && color === 'negative',
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
