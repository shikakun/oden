import React from 'react';
import * as styles from './FieldLabel.css';

export type FieldLabelProps = {
  children?: string;
  htmlFor?: string;
  required?: boolean;
  requiredFieldIndicator?: React.ReactNode;
};

export const FieldLabel: React.FC<FieldLabelProps> = ({
  children,
  htmlFor,
  required,
  requiredFieldIndicator,
  ...props
}) => {
  return (
    <div className={styles.root} {...props}>
      <label className={styles.label} htmlFor={htmlFor}>
        {children}
      </label>
      {required && (
        <div className={styles.requiredFieldIndicator}>
          {requiredFieldIndicator ?? (
            <span className={styles.requiredFieldIndicatorText}>*</span>
          )}
        </div>
      )}
    </div>
  );
};

export default FieldLabel;
