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

interface ActionMenuContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  position: 'top' | 'bottom';
}

const ActionMenuContext = createContext<ActionMenuContextProps | null>(null);

interface ActionMenuProviderProps extends PropsWithChildren {
  position?: 'top' | 'bottom';
}

const ActionMenuProvider: React.FC<ActionMenuProviderProps> = ({
  children,
  position = 'bottom',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        close();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ActionMenuContext.Provider value={{ isOpen, toggle, close, position }}>
      <div
        ref={menuRef}
        className={styles.root}
        role='menu'
        aria-hidden={!isOpen}
      >
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
  const { toggle, isOpen } = useActionMenuContext();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Button
      ref={buttonRef}
      onClick={toggle}
      aria-haspopup='true'
      aria-expanded={isOpen}
      {...props}
    >
      {children}
    </Button>
  );
};

const ActionMenuOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, position } = useActionMenuContext();
  return isOpen ? (
    <div className={styles.overlay[position]} role='menu' aria-hidden={!isOpen}>
      {children}
    </div>
  ) : null;
};

export const ActionMenu = Object.assign(ActionMenuProvider, {
  Button: ActionMenuButton,
  Overlay: ActionMenuOverlay,
});

export default ActionMenu;
