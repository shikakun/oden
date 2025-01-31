import classNames from 'classnames';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';
import * as styles from './OverlayWindow.css';
import type { ButtonProps } from '../Button';

type OverlayWindowContextProps = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  position: 'bottom' | 'right';
};

const OverlayWindowContext = createContext<OverlayWindowContextProps | null>(
  null
);

const useOverlayWindowContext = (): OverlayWindowContextProps => {
  const context = useContext(OverlayWindowContext);
  if (!context) {
    throw new Error(
      'useOverlayWindowContext must be used within an OverlayWindowProvider'
    );
  }
  return context;
};

type OverlayWindowProviderProps = PropsWithChildren & {
  position?: 'bottom' | 'right';
};

const OverlayWindowProvider: React.FC<OverlayWindowProviderProps> = ({
  children,
  position = 'bottom',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        dialogRef.current.close();
        document.body.style.overflow = '';
      }
    }
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <OverlayWindowContext.Provider value={{ isOpen, toggle, close, position }}>
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
  const { isOpen, close, position } = useOverlayWindowContext();

  if (!isOpen) return null;

  return (
    <dialog
      className={classNames(styles.root, styles.container[position])}
      {...props}
    >
      <div className={classNames(styles.body, styles.bodyPosition[position])}>
        {children}
        <div className={styles.closeButtonWrapper}>
          <div className={styles.closeButtonContainer}>
            <Button onClick={close} Icon={MdClose} shape='circle'>
              閉じる
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          styles.backdrop,
          styles.backdropPosition[position]
        )}
        aria-hidden='true'
        role='button'
        onClick={close}
      />
    </dialog>
  );
};

export const OverlayWindow = Object.assign(OverlayWindowProvider, {
  Button: OverlayWindowButton,
  Content: OverlayWindowContent,
});

export default OverlayWindow;
