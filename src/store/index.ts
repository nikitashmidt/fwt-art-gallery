import { configureStore } from '@reduxjs/toolkit';
import artistsSlice from '@/store/slices/artistsSlice';

const store = configureStore({
  reducer: {
    artistsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
