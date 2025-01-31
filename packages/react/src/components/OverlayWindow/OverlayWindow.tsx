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

const OverlayWindowProvider: React.FC<PropsWithChildren> = ({ children }) => {
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
    <OverlayWindowContext.Provider value={{ isOpen, toggle, close }}>
      {children}
      <dialog className={styles.root} ref={dialogRef} onClose={close}>
        <OverlayWindowContent>{children}</OverlayWindowContent>
      </dialog>
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

const OverlayWindowContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, close } = useOverlayWindowContext();

  if (!isOpen) return null;

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.body}>
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
          className={styles.backdrop}
          aria-hidden='true'
          role='button'
          onClick={close}
        />
      </div>
    </div>
  );
};

export const OverlayWindow = Object.assign(OverlayWindowProvider, {
  Button: OverlayWindowButton,
  Content: OverlayWindowContent,
});

export default OverlayWindow;
