import cn from 'classnames';
import Icon from '../Icon';
import './style.scss';

interface IPropsCard {
  name: string;
  thumbnail: string;
  dateFirst: number;
  dateSecond: number;
  isDark?: boolean;
  onHandler?: () => void;
}

function Card({
  name,
  thumbnail,
  dateFirst,
  dateSecond,
  isDark,
  onHandler,
}: IPropsCard) {
  return (
    <li className={cn('card', { 'card--dark': isDark })} onClick={onHandler}>
      <img src={thumbnail} className={cn('card__images')} alt='author icon' />
      <div className={cn('card__block')}>
        <div className={cn('card__info')}>
          <span className={cn('card__name')}> {name} </span>
          <time className={cn('card__date')}>
            {dateFirst} - {dateSecond}
          </time>
        </div>
        <div className={cn('card__arrow')}>
          <Icon type='Arrow' />
        </div>
      </div>
    </li>
  );
}
export default Card;
