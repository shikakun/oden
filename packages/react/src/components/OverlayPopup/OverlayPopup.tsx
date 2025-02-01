import {
  autoUpdate,
  flip,
  shift,
  useFloating,
  UseFloatingReturn,
} from '@floating-ui/react-dom';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '../Button';
import * as styles from './OverlayPopup.css';
import type { ButtonProps } from '../Button';

type FloatingUIContextType = Pick<UseFloatingReturn, 'refs' | 'floatingStyles'>;

type OverlayPopupContextProps = FloatingUIContextType & {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const OverlayPopupContext = createContext<OverlayPopupContextProps | null>(
  null
);

const useOverlayPopupContext = (): OverlayPopupContextProps => {
  const context = useContext(OverlayPopupContext);
  if (!context) {
    throw new Error(
      'useOverlayPopupContext must be used within OverlayPopupProvider'
    );
  }
  return context;
};

const useOutsideAndEscapeHandler = (
  isOpen: boolean,
  close: () => void,
  ref: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, close, ref]);
};

const OverlayPopupProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    middleware: [flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  });
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideAndEscapeHandler(isOpen, close, menuRef);

  return (
    <OverlayPopupContext.Provider
      value={{ isOpen, toggle, close, refs, floatingStyles }}
    >
      <div className={styles.root} ref={menuRef}>
        {children}
      </div>
    </OverlayPopupContext.Provider>
  );
};

const OverlayPopupButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { toggle, isOpen, refs } = useOverlayPopupContext();

  return (
    <Button
      onClick={toggle}
      aria-haspopup='true'
      aria-expanded={isOpen}
      ref={refs.setReference}
      {...props}
    >
      {children}
    </Button>
  );
};

const OverlayPopupContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, refs, floatingStyles } = useOverlayPopupContext();

  return isOpen ? (
    <div
      className={styles.overlay}
      role='menu'
      aria-hidden={!isOpen}
      ref={refs.setFloating}
      style={floatingStyles}
    >
      {children}
    </div>
  ) : null;
};

export const OverlayPopup = Object.assign(OverlayPopupProvider, {
  Button: OverlayPopupButton,
  Content: OverlayPopupContent,
});

export default OverlayPopup;
