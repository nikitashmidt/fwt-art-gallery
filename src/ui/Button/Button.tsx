import cn from 'classnames';
import './style.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isDark: boolean;
  className: string;
  isFilled: boolean;
}

export const Button = ({
  onClick,
  isDark,
  className,
  children,
}: IButtonProps) => {
  return (
    <button
      className={cn('button', className, { [`${className}--dark`]: isDark })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
