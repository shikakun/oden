import classNames from 'classnames';
import type React from 'react';
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import type { ThemeType } from '../ThemeProvider';
import { useTheme } from '../ThemeProvider';
import * as styles from './OverlayWindow.css';

type PositionType = 'bottom' | 'right';

type OverlayWindowContextProps = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  position: PositionType;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  showCloseButton?: boolean;
};

const defaultContext: OverlayWindowContextProps = {
  isOpen: false,
  toggle: () => {},
  close: () => {},
  position: 'bottom',
  dialogRef: { current: null },
  showCloseButton: true,
};

const OverlayWindowContext =
  createContext<OverlayWindowContextProps>(defaultContext);

const useOverlayWindowContext = () => {
  const context = useContext(OverlayWindowContext);
  if (!context) {
    throw new Error(
      'useOverlayWindowContext must be used within OverlayWindowProvider',
    );
  }
  return context;
};

type OverlayWindowProviderProps = PropsWithChildren & {
  position?: PositionType;
  showCloseButton?: boolean;
};

const OverlayWindowProvider = ({
  children,
  position = 'bottom',
  showCloseButton = true,
}: OverlayWindowProviderProps) => {
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
      value={{ isOpen, toggle, close, position, dialogRef, showCloseButton }}
    >
      {children}
    </OverlayWindowContext.Provider>
  );
};

const OverlayWindowButton = ({ children, ...props }: ButtonProps) => {
  const { toggle, isOpen } = useOverlayWindowContext();
  return (
    <Button
      onClick={toggle}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </Button>
  );
};

const OverlayWindowContent = ({ children, ...props }: PropsWithChildren) => {
  const { close, position, dialogRef, showCloseButton } =
    useOverlayWindowContext();
  const { theme } = useTheme() as { theme: ThemeType };

  return (
    <dialog ref={dialogRef} className={styles.root} {...props}>
      <div
        className={classNames(
          styles.container,
          styles.containerPosition[position],
        )}
      >
        <div
          className={classNames(
            styles.body,
            styles.bodyColor[theme],
            styles.bodyPosition[position],
          )}
        >
          {children}
        </div>
        <div
          className={classNames(
            styles.backdropColor[theme],
            styles.backdropPosition[position],
          )}
          aria-hidden="true"
          onClick={close}
        />
      </div>
      {showCloseButton && (
        <div className={styles.closeButton}>
          <Button onClick={close} Icon={MdClose} shape="circle">
            閉じる
          </Button>
        </div>
      )}
    </dialog>
  );
};

export const OverlayWindow = Object.assign(OverlayWindowProvider, {
  Button: OverlayWindowButton,
  Content: OverlayWindowContent,
});

export default OverlayWindow;
