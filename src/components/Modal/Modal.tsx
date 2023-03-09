import cn from 'classnames';

interface IModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, children }: IModalProps) => {
  if (isOpen) {
    const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = paddingOffset;
  } else {
    document.body.style.paddingRight = '0';
    document.body.style.overflow = '';
  }

  return <div className={cn('Popup')}>{children}</div>;
};

export default Modal;
