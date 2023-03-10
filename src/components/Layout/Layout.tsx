import cn from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import useTheme from '../../hooks/useTheme';
import './style.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();

  return (
    <div className={cn('layout', { 'layout--dark': isDark })}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
