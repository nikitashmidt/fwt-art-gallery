import cn  from 'classnames'
import './style.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    isDark?: boolean,
    isOutlined?: boolean,
    isDisabled?: boolean,
    className: 'button__default' | 'button__text' | 'button__trash' | 'button__theme' | 'button__circle',
    buttonOverImage?: boolean,
}
export const Button = ({onClick, isDark, isOutlined, isDisabled, children, className, buttonOverImage, }:IButtonProps) => {
    const dark = isDark && `${className}--dark`;
    const outlined = isOutlined && `${className}--outlined`;
    const btnOverImage = buttonOverImage && `${className}--boi`;
    return(
        <button 
            className={cn('button', className, dark, outlined, btnOverImage )}
            disabled={isDisabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

