import { IArtists } from '../../types';
import Grid from '../../ui/Grid';
import './style.scss';
import Card from '../../ui/Card';

const artists: IArtists[] = [
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144df711ssd4f7f68f12',
    name: 'Edvard Musadanch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144dzxzf711d4f7f68f12',
    name: 'Edvard Munch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144df71zxz1d4f7f68f12',
    name: 'Edvard Munch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144df7dadad11d4f7f68f12',
    name: 'Edvard Munch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144df71fgf1d4f7f68f12',
    name: 'Edvard Munch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
  {
    genres: ['62e148104df711d4f7f68ef2', '62e148104df711d4f7f68efe'],
    _id: '62e148144dffgdf711d4f7f68f12',
    name: 'Edvard Munch',
    description:
      'Was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.',
    yearsOfLife: '12 December 1863 – 23 January 1944',
    mainPainting: {
      _id: '62e148164df711d4f7f68f1d',
      name: 'Evening on Karl Johan Street',
      yearOfCreation: 1892,
      image: {
        _id: '62e148174df711d4f7f68f29',
        src: '/images/62e148164df711d4f7f68f1d/image.jpg',
        webp: '/images/62e148164df711d4f7f68f1d/image.webp',
        src2x: '/images/62e148164df711d4f7f68f1d/image2x.jpg',
        webp2x: '/images/62e148164df711d4f7f68f1d/image2x.webp',
        original: '/images/62e148164df711d4f7f68f1d/original.jpg',
      },
    },
  },
];

const Content = () => (
  <div className='content'>
    <div className='content__container'>
      <Grid>
        {artists.map((item) => (
          <Card {...item} key={item._id} />
        ))}
      </Grid>
    </div>
  </div>
);

export default Content;
