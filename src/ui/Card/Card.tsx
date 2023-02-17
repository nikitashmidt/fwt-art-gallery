import cn  from 'classnames';
import author from '../../resources/author.png';
import arrow from '../../resources/arrow.svg';
import './style.scss';


interface IPropsCard {
  name: string,
  thumbnail: string,
  dateFirst: number,
  dateSecond: number,
  onClick: () => void,
  isDark: boolean,
  size?: 'small' | 'medium' | 'large', 
}

export const Card = ({name, thumbnail, dateFirst, dateSecond, onClick, isDark, size}:IPropsCard) => {
  return (
    <li 
      className={cn('card', {'card--dark': isDark}, `card--${size}` )
    }>
        <img src={author} 
        className={cn("card__images")}
         alt="author icon"/>
        <div className={cn("card__block")}>
          <div className={cn("card__info")}>
              <span className={cn("card__name")}> {name} name </span>
              <time className={cn("card__date")}> {dateFirst} - {dateSecond} 123-123 </time>
            </div>
            <div className={cn("card__arrow")}>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
    </li>
  );
};
