import classNames from 'classnames';
import React, { createContext, useContext } from 'react';
import { useTheme } from '../ThemeProvider';
import * as styles from './FormControl.css';
import type { ThemeType } from '../ThemeProvider';

export type FormControlProps = {
  children: React.ReactNode;
  required?: boolean;
};

const FormControlContext = createContext<{ required?: boolean } | undefined>(
  undefined
);

const FormControlBase: React.FC<FormControlProps> = ({
  children,
  required,
}) => {
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <FormControlContext.Provider value={{ required }}>
      <div className={classNames(styles.root, styles.rootColor[theme])}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
};

const Label: React.FC<{
  children?: string;
  htmlFor?: string;
  requiredFieldIndicator?: React.ReactNode;
}> = ({ children, htmlFor, requiredFieldIndicator }) => {
  const { required } = useContext(FormControlContext) || {};
  return (
    <div className={styles.label}>
      <label className={styles.labelText} htmlFor={htmlFor}>
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

export const FormControl = Object.assign(FormControlBase, { Label });

export default FormControl;
