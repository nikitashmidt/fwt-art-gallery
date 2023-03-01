import cn from 'classnames';

import './style.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  isDark?: boolean;
  isDisabled?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'default' | 'text' | 'theme' | 'icon' | 'circle';
}

function Button({
  onClick,
  isDark,
  className,
  isDisabled,
  variant = 'default',
  type = 'button',
  children,
}: IButtonProps) {
  return (
    <button
      className={cn('button', className, `button--${variant}`, {
        [`button--dark`]: isDark,
      })}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
