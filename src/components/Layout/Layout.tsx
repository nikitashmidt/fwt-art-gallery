import cn from 'classnames';

import Header from '@components/Header';
import Footer from '@components/Footer';
import useTheme from '@/hooks/useTheme';
import './style.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDark } = useTheme();

  if (isDark) {
    document.body.style.backgroundColor = '#121212';
  } else {
    document.body.style.backgroundColor = '';
  }

  // если добавлять  bg на layout, то темный фон будет не везде
  // где-то можно будет увидеть белый фон
  return (
    <div className={cn('layout')}>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
