import cn from 'classnames';

import useTheme from '../../hooks/useTheme';
import { IArtist } from '../../types';
import { ReactComponent as Arrow } from '../../resources/svg/arrow.svg';
import './style.scss';

interface ICardProps extends IArtist {
  onClick?: () => void;
}

function Card({ name, yearsOfLife, onClick }: ICardProps) {
  const { isDark } = useTheme();

  return (
    <div onClick={onClick} className={cn('card', { 'card--dark': isDark })}>
      <img
        className={cn('card__images')}
        alt='author icon'
        src='https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg'
      />
      <div className={cn('card__block')}>
        <div className={cn('card__info')}>
          <span className={cn('card__name')}> {name} </span>
          <time className={cn('card__date')}> {yearsOfLife} </time>
        </div>
        <div className={cn('card__arrow')}>
          <Arrow />
        </div>
      </div>
    </div>
  );
}

export default Card;
