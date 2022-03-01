import { combineReducers } from 'redux';
import favoritesReducer from './favorites';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import api from './middleware/api';
import pokemonsReducer from './pokemons';

const rootReducer = combineReducers({
  entities: combineReducers({
    favorites: favoritesReducer,
    pokemons: pokemonsReducer,
  }),
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api),
});

export const persistor = persistStore(store);
