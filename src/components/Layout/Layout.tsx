import cn from 'classnames';

import useTheme from '../../hooks/useTheme';
import './style.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={cn('layout', {
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};

export default Layout;
