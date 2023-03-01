import cn from 'classnames';
import './style.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isDark: boolean;
  className: string;
}

function Button({ onClick, isDark, className, children }: IButtonProps) {
  return (
    <button
      className={cn('button', className, { [`${className}--dark`]: isDark })}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
