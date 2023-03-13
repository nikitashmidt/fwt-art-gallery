import cn from 'classnames';

import useTheme from '@/hooks/useTheme';
import { IArtist } from '@/types';
import { ReactComponent as Arrow } from '@/resources/svg/arrow.svg';
import './style.scss';

interface ICardProps extends IArtist {
  onClick?: () => void;
}

const Card = ({ name, yearsOfLife, mainPainting, onClick }: ICardProps) => {
  const { isDark } = useTheme();

  let source = '/mainpaingigs';

  if (mainPainting.image.webp2x) {
    source = `https://internship-front.framework.team/${mainPainting.image.webp2x}`;
  }

  // eslint ругается на использование бэктиков в которые может залететь undefined, в будущем с бекенда будет приходить полная сслыка на картинку, так что потом этого не будет

  return (
    <div onClick={onClick} className={cn('card', { 'card--dark': isDark })}>
      <img className={cn('card__images')} alt={name} src={source} />
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
};

export default Card;
