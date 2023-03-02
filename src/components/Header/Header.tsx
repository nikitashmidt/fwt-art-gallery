import React, { FC, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as Logo } from '../../resources/svg/logo.svg';
import { ReactComponent as Hamburger } from '../../resources/svg/hamburger.svg';
import { ReactComponent as CloseBtn } from '../../resources/svg/close-btn.svg';
import { ReactComponent as LightTheme } from '../../resources/svg/light-theme.svg';
import { ReactComponent as DarkTheme } from '../../resources/svg/dark-theme.svg';
import useTheme from '../../hooks/useTheme';
import Button from '../../ui/Button';
import './style.scss';

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { isDark, setIsDark } = useTheme();
  if (openMenu) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <a href='#s' className={cn('header__logo')}>
          <Logo />
        </a>
        <div className={cn('header__right')}>
          <div
            className={cn('header__right-hamburger')}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <CloseBtn /> : <Hamburger />}
          </div>
          <div
            className={cn('header__right-menu', {
              'header__right-menu--active': openMenu,
            })}
          >
            <div
              className='header__right-theme'
              onClick={() => setIsDark(!isDark)}
            >
              <div className='header__right-icon'>
                {isDark ? (
                  <Button variant='theme' isDark>
                    <LightTheme />
                  </Button>
                ) : (
                  <Button variant='theme'>
                    <DarkTheme />
                  </Button>
                )}
              </div>
              <a href='#s' className='header__right-mode'>
                {isDark ? 'light mode' : 'Dark mode'}
              </a>
            </div>
            <div className='header__right-authorization'>
              <button className='header__right-login'>Log in</button>
              <button className='header__right-signup'>Sign up</button>
            </div>
          </div>
          <div
            className={cn('header__right-overlay', {
              'header__right-overlay--active': openMenu,
            })}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
