import cn from 'classnames';
import Card from '../Card';

import './style.scss';

interface IArtist {
  id: number;
  name: string;
  thumbnail: string;
  date: number;
}

interface IGridProps {
  artists: Array<IArtist>;
}

function Grid({ artists }: IGridProps) {
  return (
    <ul className={cn('grid')}>
      {artists.map((artist) => (
        <Card
          key={artist.id}
          name={artist.name}
          thumbnail={artist.thumbnail}
          date={artist.date}
        />
      ))}
    </ul>
  );
}

export default Grid;
