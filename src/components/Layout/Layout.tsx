import cn from 'classnames';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import useTheme from '../../hooks/useTheme';
import './style.scss';

const Layout = () => {
  const { isDark } = useTheme();

  return (
    <div className={cn('layout', { 'layout--dark': isDark })}>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
