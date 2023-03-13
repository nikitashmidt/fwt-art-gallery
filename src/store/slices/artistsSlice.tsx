import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IArtist } from '@/types';
import { userAPI } from '@/api';

type ArtistsState = {
  artists: IArtist[];
  loading: string;
  error: null | string;
};

export const getArtists = createAsyncThunk<IArtist[]>(
  'artists/getArtists',
  async () => {
    const response = await userAPI.getArtists().then((item) => item);
    return response.data;
  }
);

const initialState: ArtistsState = {
  artists: [],
  loading: 'idle',
  error: null,
};

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })

      .addCase(getArtists.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.artists = action.payload;
      })

      .addCase(getArtists.rejected, (state) => {
        state.loading = 'idle';
        state.error = 'error';
      })

      .addDefaultCase(() => {});
  },
});

export default artistsSlice.reducer;
