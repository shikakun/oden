import classNames from 'classnames';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';
import { useTheme } from '../ThemeProvider';
import * as styles from './OverlayWindow.css';
import type { ButtonProps } from '../Button';
import type { ThemeType } from '../ThemeProvider';

type PositionType = 'bottom' | 'right';

type OverlayWindowContextProps = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  position: PositionType;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

const defaultContext: OverlayWindowContextProps = {
  isOpen: false,
  toggle: () => {},
  close: () => {},
  position: 'bottom',
  dialogRef: { current: null },
};

const OverlayWindowContext =
  createContext<OverlayWindowContextProps>(defaultContext);

const useOverlayWindowContext = () => {
  const context = useContext(OverlayWindowContext);
  if (!context) {
    throw new Error(
      'useOverlayWindowContext must be used within OverlayWindowProvider'
    );
  }
  return context;
};

type OverlayWindowProviderProps = PropsWithChildren & {
  position?: PositionType;
};

const OverlayWindowProvider: React.FC<OverlayWindowProviderProps> = ({
  children,
  position = 'bottom',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;
    if (isOpen) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialogRef.current.close();
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <OverlayWindowContext.Provider
      value={{ isOpen, toggle, close, position, dialogRef }}
    >
      {children}
    </OverlayWindowContext.Provider>
  );
};

const OverlayWindowButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { toggle, isOpen } = useOverlayWindowContext();
  return (
    <Button
      onClick={toggle}
      aria-haspopup='dialog'
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </Button>
  );
};

const OverlayWindowContent: React.FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const { close, position, dialogRef } = useOverlayWindowContext();
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <dialog ref={dialogRef} className={styles.root} {...props}>
      <div
        className={classNames(
          styles.container,
          styles.containerPosition[position]
        )}
      >
        <div
          className={classNames(
            styles.body,
            styles.bodyColor[theme],
            styles.bodyPosition[position]
          )}
        >
          {children}
        </div>
        <div
          className={classNames(
            styles.backdropColor[theme],
            styles.backdropPosition[position]
          )}
          aria-hidden='true'
          role='button'
          onClick={close}
        />
      </div>
      <div className={styles.closeButton}>
        <Button onClick={close} Icon={MdClose} shape='circle'>
          閉じる
        </Button>
      </div>
    </dialog>
  );
};

export const OverlayWindow = Object.assign(OverlayWindowProvider, {
  Button: OverlayWindowButton,
  Content: OverlayWindowContent,
});

export default OverlayWindow;
