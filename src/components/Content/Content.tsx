import author from '../../resources/author.png';
import Grid from '../../ui/Grid';
import './style.scss';

interface IArr {
  id: number;
  name: string;
  thumbnail: string;
  date: number;
}

const arr: IArr[] = [
  { id: 1, name: 'nikita', date: 1234, thumbnail: author },
  { id: 2, name: 'nikita', date: 1234, thumbnail: author },
  { id: 3, name: 'nikita', date: 1234, thumbnail: author },
  { id: 4, name: 'nikita', date: 1234, thumbnail: author },
  { id: 5, name: 'nikita', date: 1234, thumbnail: author },
  { id: 6, name: 'nikita', date: 1234, thumbnail: author },
];

const Content = () => (
  <div className='content'>
    <div className='content__container'>
      <Grid artists={arr} />
    </div>
  </div>
);

export default Content;
