import React, { FC } from 'react';
import cn from 'classnames';

import { ReactComponent as Facebook } from '../../resources/svg/facebook.svg';
import { ReactComponent as Instagram } from '../../resources/svg/inst.svg';
import { ReactComponent as Vk } from '../../resources/svg/vk.svg';
import './style.scss';

const Footer: FC = () => (
  <footer className={cn('footer')}>
    <div className='footer__container'>
      <div className={cn('footer__info')}>
        <p className={cn('footer__info-description')}>
          Проект реализован в рамках стажировки для Frontend разработчиков от
          компании
          <a href='#company' className={cn('footer__info-company')}>
            Framework Team
          </a>
        </p>
        <span className={cn('footer__info-author')}>Шмидт Никита, 2023</span>
      </div>
      <div className={cn('footer__social')}>
        <a href='facebook.com' target='_blank' title='facebook'>
          <Facebook />
        </a>
        <a href='instagram.com' target='_blank' title='instagram'>
          <Instagram />
        </a>
        <a href='vk.com' target='_blank' title='vk'>
          <Vk />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
