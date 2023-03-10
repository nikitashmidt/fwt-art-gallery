import { memo, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../resources/svg/logo.svg';
import { ReactComponent as Hamburger } from '../../resources/svg/hamburger.svg';
import { ReactComponent as CloseBtn } from '../../resources/svg/close-btn.svg';
import { ReactComponent as LightTheme } from '../../resources/svg/light-theme.svg';
import { ReactComponent as DarkTheme } from '../../resources/svg/dark-theme.svg';
import useTheme from '../../hooks/useTheme';
import Modal from '../Modal';
import Button from '../../ui/Button';
import './style.scss';

const Header = memo(() => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { isDark, toggleTheme } = useTheme();

  const toggleOpenMenu = () => setOpenMenu(!openMenu);

  const toggleChangeTheme = () => toggleTheme(!isDark);

  return (
    <header className={cn('header', { 'header--dark': isDark })}>
      <Modal isOpen={openMenu} />
      <div className={cn('container header__container')}>
        <a href='#s' className={cn('header__logo')}>
          <Logo />
        </a>
        <div className={cn('header__right')}>
          <div className={cn('header__hamburger')} onClick={toggleOpenMenu}>
            {openMenu ? <CloseBtn /> : <Hamburger />}
          </div>
          <div
            className={cn('header__menu', {
              'header__menu--active': openMenu,
            })}
          >
            <div className={cn('header__theme')} onClick={toggleChangeTheme}>
              <div className={cn('header__icon')}>
                <Button variant='theme' isDark={isDark}>
                  {isDark ? <LightTheme /> : <DarkTheme />}
                </Button>
              </div>
              <a href='#s' className={cn('header__mode')}>
                {isDark ? 'light mode' : 'Dark mode'}
              </a>
            </div>
            <div className={cn('header__authorization')}>
              <button className={cn('header__login')}>Log in</button>
              <button className={cn('header__signup')}>Sign up</button>
            </div>
          </div>
          <div
            className={cn('header__overlay', {
              'header__overlay--active': openMenu,
            })}
            onClick={toggleOpenMenu}
          />
        </div>
      </div>
    </header>
  );
});

export default Header;
