import { useEffect } from 'react';

import Grid from '@/ui/Grid';
import Card from '@/ui/Card';
import { getArtists } from '@/store/slices/artistsSlice';
import { useAppSelector, useAppDispatch } from '@/hooks/useStore';
import useTheme from '@/hooks/useTheme';
import Loader from '@/ui/Loader';
import './style.scss';

const Content = () => {
  const { isDark } = useTheme();

  const artists = useAppSelector((state) => state.artistsSlice.artists);

  const loading = useAppSelector((state) => state.artistsSlice.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <div className='content'>
      <div className='content__container'>
        {loading === 'loading' ? (
          <Loader isDark={isDark} />
        ) : (
          <Grid>
            {artists.map((item) => (
              <Card {...item} key={item._id} />
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Content;
