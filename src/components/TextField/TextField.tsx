import { Size } from '@shikakun/dashi';
import classNames from 'classnames';
import React from 'react';
import * as styles from './TextField.css';

type AutocompleteAttributeType =
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'bday'
  | 'cc-additional-name'
  | 'cc-csc'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-exp'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-number'
  | 'cc-type'
  | 'country-name'
  | 'country'
  | 'current-password'
  | 'current-password webauthn'
  | 'email'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'impp'
  | 'language'
  | 'name'
  | 'new-password'
  | 'nickname'
  | 'off'
  | 'on'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'photo'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'tel-area-code'
  | 'tel-country-code'
  | 'tel-extension'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-local'
  | 'tel-national'
  | 'tel'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'url'
  | 'username'
  | 'username webauthn';

type InputmodeAttributeType =
  | 'none'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search';

type BaseTextFieldProps = {
  ariaLabelledby?: string;
  autoComplete?: AutocompleteAttributeType;
  children?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  inputMode?: InputmodeAttributeType;
  name?: string;
  required?: boolean;
  value?: string;
  width?: 'auto' | 'full' | 'half' | 'third';
};

type SingleLineTextFieldProps = BaseTextFieldProps & {
  rows?: never;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
};

type MultiLineTextFieldProps = BaseTextFieldProps & {
  rows?: number;
  type?: never;
};

export type TextFieldProps = SingleLineTextFieldProps | MultiLineTextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
  ariaLabelledby,
  autoComplete,
  children,
  disabled,
  error,
  id,
  inputMode,
  name,
  required,
  rows,
  type = 'text',
  value,
  width = 'auto',
  ...props
}) => {
  const rootClass = classNames(styles.root, {
    [styles.error]: error,
    [styles.isMultiLine]: rows && rows > 1,
    [styles.widthAuto]: width === 'auto',
    [styles.widthFull]: width === 'full',
    [styles.widthHalf]: width === 'half',
    [styles.widthThird]: width === 'third',
  });

  const valueText = value || children || undefined;
  const textAreaHeight = rows
    ? `calc(${rows}lh + ${Size.spacing['xs']} * 2)`
    : undefined;

  if (rows && rows > 1) {
    return (
      <textarea
        aria-labelledby={ariaLabelledby}
        autoComplete={autoComplete}
        className={rootClass}
        disabled={disabled}
        id={id}
        inputMode={inputMode}
        name={name}
        required={required}
        rows={rows}
        style={{
          height: textAreaHeight,
        }}
        {...props}
      >
        {valueText}
      </textarea>
    );
  }

  return (
    <input
      aria-labelledby={ariaLabelledby}
      autoComplete={autoComplete}
      className={rootClass}
      disabled={disabled}
      id={id}
      inputMode={inputMode}
      name={name}
      required={required}
      type={type}
      value={valueText}
      {...props}
    />
  );
};

export default TextField;
