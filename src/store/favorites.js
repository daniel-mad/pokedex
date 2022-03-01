import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      const idx = favorites.findIndex(p => p.id === action.payload.id);
      idx !== -1 ? favorites.splice(idx, 1) : favorites.push(action.payload);
    },
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
