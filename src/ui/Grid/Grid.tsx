import useTheme from '../../hooks/useTheme';
import { newGuid } from '../../utils/guid'; 
import cn  from 'classnames';
import Card from '../Card';
import './style.scss';

interface IPropsGrid {
  artists: any[]
}
const Grid = ({artists}:IPropsGrid) => {
  const { isDark } = useTheme();
  
  return (
    <ul className={cn('grid')}>
        {artists.map((artist)=> {
          return (
            <Card key={newGuid()} isDark={isDark} thumbnail={artist.thumbnail} name={artist.name} 
              dateFirst={artist.dateFirst} dateSecond={artist.dateSecond}
            />
          )
        })}
    </ul>
  );
};
export default Grid;