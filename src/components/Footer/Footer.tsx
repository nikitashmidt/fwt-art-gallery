import { memo } from 'react';
import cn from 'classnames';

import { ReactComponent as Facebook } from '../../resources/svg/facebook.svg';
import { ReactComponent as Instagram } from '../../resources/svg/inst.svg';
import { ReactComponent as Vk } from '../../resources/svg/vk.svg';
import useTheme from '../../hooks/useTheme';
import './style.scss';

const Footer = memo(() => {
  const { isDark } = useTheme();

  return (
    <footer className={cn('footer', { 'footer--dark': isDark })}>
      <div className={cn('footer__container')}>
        <div className={cn('footer__info')}>
          <p className={cn('footer__info-description')}>
            Проект реализован в рамках стажировки для Frontend разработчиков от
            компании
            <a
              href='https://framework.team'
              target='_blank'
              title='Framework Team'
              className={cn('footer__info-company')}
              rel='noreferrer'
            >
              Framework Team
            </a>
          </p>
          <span className={cn('footer__info-author')}>Шмидт Никита, 2023</span>
        </div>
        <div className={cn('footer__social')}>
          <a
            href='https://facebook.com'
            target='_blank'
            title='facebook'
            rel='noreferrer'
            className={cn('footer__social-links')}
          >
            <Facebook />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            title='instagram'
            rel='noreferrer'
            className={cn('footer__social-links')}
          >
            <Instagram />
          </a>

          <a
            href='https://vk.com'
            target='_blank'
            title='vk'
            rel='noreferrer'
            className={cn('footer__social-links')}
          >
            <Vk />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
