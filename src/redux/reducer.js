import { TOGGLE_FAVORITE } from './actions';

const initialData = {
  favorites: [],
};
const pokemonReducer = (state = initialData, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const favPokemon = state.favorites.find(p => p.id === action.payload.id);
      return {
        ...state,
        favorites: favPokemon
          ? [...state.favorites.filter(p => p.id !== action.payload.id)]
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
