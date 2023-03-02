import cn from 'classnames';
import useTheme from '../../hooks/useTheme';
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

const Grid = ({ artists }: IGridProps) => {
  const { isDark } = useTheme();
  return (
    <ul className={cn('grid')}>
      {artists.map((artist) => (
        <Card
          isDark={isDark}
          key={artist.id}
          name={artist.name}
          thumbnail={artist.thumbnail}
          date={artist.date}
        />
      ))}
    </ul>
  );
};

export default Grid;
