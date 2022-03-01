import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'pokemons',
  initialState: {
    list: [],
    current: {},
    loading: false,
  },
  reducers: {
    pokemoneRequsted: (state, action) => {
      state.loading = true;
    },
    pokemonsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    pokemoneRequstFailed: (state, action) => {
      state.loading = false;
    },
  },
});

const { pokemoneRequsted, pokemonsReceived, pokemoneRequstFailed } =
  slice.actions;

export default slice.reducer;

export const loadPokemons = baseURL =>
  apiCallBegan({
    baseURL,
    onStart: pokemoneRequsted.type,
    onSuccess: pokemonsReceived.type,
    onError: pokemoneRequstFailed.type,
  });
