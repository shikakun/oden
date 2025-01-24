import { autoUpdate, flip, shift, useFloating } from '@floating-ui/react-dom';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { Button } from '../Button';
import * as styles from './ActionMenu.css';
import type { ButtonProps } from '../Button';

interface ActionMenuContextProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
}

const ActionMenuContext = createContext<ActionMenuContextProps | null>(null);

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

  return (
    <ActionMenuContext.Provider
      value={{ isOpen, toggle, close, refs, floatingStyles }}
    >
      <div className={styles.root} role='menu' aria-hidden={!isOpen}>
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

export const ActionMenu = Object.assign(ActionMenuProvider, {
  Button: ActionMenuButton,
  Overlay: ActionMenuOverlay,
});

export default ActionMenu;
