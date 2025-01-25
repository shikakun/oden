import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import { Button } from '../Button';
import * as styles from './OverlayWindow.css';

export interface OverlayWindowProps {
  // とりあえずbottomだけ用意する
  position?: 'bottom';
  isOpen?: boolean;
  onClose?: () => void;
  closeLabel?: string;
  children?: React.ReactNode;
}

export const OverlayWindow: React.FC<OverlayWindowProps> = ({
  position = 'bottom',
  isOpen = false,
  onClose,
  closeLabel = '閉じる',
  children,
  ...props
}) => {
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

  const handleClose = () => {
    dialogRef.current?.close();
    onClose?.();
  };

  return (
    <dialog
      className={styles.root}
      ref={dialogRef}
      onClose={handleClose}
      {...props}
    >
      <div
        className={classNames(styles.container, {
          [styles.containerPositionBottom]: position === 'bottom',
        })}
      >
        <div
          className={classNames(styles.body, {
            [styles.bodyPositionBottom]: position === 'bottom',
          })}
        >
          {children}
          <div className={styles.closeButtonWrapper}>
            <div className={styles.closeButtonContainer}>
              <Button onClick={handleClose} Icon={MdClose} shape='circle'>
                {closeLabel}
              </Button>
            </div>
          </div>
        </div>
        <div
          className={classNames(styles.backdrop, {
            [styles.backdropPositionBottom]: position === 'bottom',
          })}
          aria-hidden='true'
          role='button'
          onClick={handleClose}
        />
      </div>
    </dialog>
  );
};

export default OverlayWindow;
