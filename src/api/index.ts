import axios from 'axios';

import { IArtist } from '@/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://internship-front.framework.team',
});

export const userAPI = {
  getArtists() {
    return instance.get<IArtist[]>('artists/static');
  },

  getArtist(id: string) {
    return instance.get(`artists/static/${id}`);
  },

  getGenres() {
    return instance.get('genres/static');
  },
};
