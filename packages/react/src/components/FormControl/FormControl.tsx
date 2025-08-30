import classNames from 'classnames';
import type React from 'react';
import { createContext, useContext } from 'react';
import type { ThemeType } from '../ThemeProvider';
import { useTheme } from '../ThemeProvider';
import * as styles from './FormControl.css';

export type FormControlProps = {
  children: React.ReactNode;
  required?: boolean;
};

const FormControlContext = createContext<{ required?: boolean } | undefined>(
  undefined,
);

const FormControlBase = ({ children, required }: FormControlProps) => {
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <FormControlContext.Provider value={{ required }}>
      <div className={classNames(styles.root, styles.rootColor[theme])}>
        {children}
      </div>
    </FormControlContext.Provider>
  );
};

const Label = ({
  children,
  htmlFor,
  requiredFieldIndicator,
}: {
  children?: string;
  htmlFor?: string;
  requiredFieldIndicator?: React.ReactNode;
}) => {
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
