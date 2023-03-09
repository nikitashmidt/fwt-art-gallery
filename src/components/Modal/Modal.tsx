import cn from 'classnames';
import { useEffect } from 'react';

interface IModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, children }: IModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const paddingOffset = `${
        window.innerWidth - document.body.offsetWidth
      }px`;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = paddingOffset;
    } else {
      document.body.style.paddingRight = '0';
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return <div className={cn('Popup')}>{children}</div>;
};

export default Modal;
