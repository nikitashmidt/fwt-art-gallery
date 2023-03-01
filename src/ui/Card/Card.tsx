import cn from 'classnames';

import './style.scss';

interface IPropsCard {
  name: string;
  thumbnail: string;
  date: number;
  isDark?: boolean;
  onHandler?: () => void;
}

function Card({ name, thumbnail, date, isDark, onHandler }: IPropsCard) {
  return (
    <div onClick={onHandler} className={cn('card', { 'card--dark': isDark })}>
      <img src={thumbnail} className={cn('card__images')} alt='author icon' />
      <div className={cn('card__block')}>
        <div className={cn('card__info')}>
          <span className={cn('card__name')}> {name} </span>
          <time className={cn('card__date')}>{date}</time>
        </div>
        <div className={cn('card__arrow')}>Вставь иконку</div>
      </div>
    </div>
  );
}

export default Card;
