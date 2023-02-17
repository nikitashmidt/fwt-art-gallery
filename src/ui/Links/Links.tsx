import cn  from 'classnames';
import { AnchorHTMLAttributes } from 'react';
import './style.scss';

interface ILinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isDark: boolean,
}

const Links = ({isDark, children }: ILinksProps) => {
    return(
        <a href="#" className={cn('links', {'links--dark': isDark})}>
            {children}
        </a>
    )
}

export default Links;