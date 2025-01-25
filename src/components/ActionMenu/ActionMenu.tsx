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
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button } from '../Button';
import * as styles from './ActionMenu.css';
import type { ButtonProps } from '../Button';

type FloatingUIContext = Pick<UseFloatingReturn, 'refs' | 'floatingStyles'>;

type ActionMenuContextProps = FloatingUIContext & {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const ActionMenuContext = createContext<ActionMenuContextProps | null>(null);

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

const ActionMenuProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    middleware: [flip(), shift()],
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
  });
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideAndEscapeHandler(isOpen, close, menuRef);

  return (
    <ActionMenuContext.Provider
      value={{ isOpen, toggle, close, refs, floatingStyles }}
    >
      <div className={styles.root} ref={menuRef}>
        {children}
      </div>
    </ActionMenuContext.Provider>
  );
};

const useActionMenuContext = (): ActionMenuContextProps => {
  const context = useContext(ActionMenuContext);
  if (!context) {
    throw new Error(
      'useActionMenuContext must be used within an ActionMenuProvider'
    );
  }
  return context;
};

const ActionMenuButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { toggle, isOpen, refs } = useActionMenuContext();

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

const ActionMenuOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, refs, floatingStyles } = useActionMenuContext();

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role='menu'
      aria-hidden={!isOpen}
      ref={refs.setFloating}
      style={floatingStyles}
    >
      {children}
    </div>
  );
};

export const ActionMenu = Object.assign(ActionMenuProvider, {
  Button: ActionMenuButton,
  Overlay: ActionMenuOverlay,
});

export default ActionMenu;
