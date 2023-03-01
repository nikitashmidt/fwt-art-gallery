import cn from 'classnames';
import newGuid from '../../utils/guid';
import Card from '../Card';
import './style.scss';

interface IArtist {
  name: string;
  thumbnail: string;
  dateFirst: number;
  dateSecond: number;
}
interface IGridProps {
  artists: Array<IArtist>;
}

function Grid({ artists }: IGridProps) {
  return (
    <ul className={cn('grid')}>
      {artists.map((artist) => (
        <Card
          key={newGuid()}
          name={artist.name}
          thumbnail={artist.thumbnail}
          dateFirst={artist.dateFirst}
          dateSecond={artist.dateSecond}
        />
      ))}
    </ul>
  );
}

export default Grid;
