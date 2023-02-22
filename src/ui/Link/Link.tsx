import cn  from 'classnames';
import { AnchorHTMLAttributes } from 'react';
import './style.scss';

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isDark: boolean,
    className?: string,
}

const Link = ({isDark, className, children }: ILinkProps) => {
    return(
        <a href="#" className={cn('link', className, {'link--dark': isDark})}>
            {children}
        </a>
    )
}

export default Link;