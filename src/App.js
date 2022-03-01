import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './components/AppNavigator';
import FavoritesPokemon from './Pages/FavoritesPokemon';
import Pokedex from './Pages/Pokedex';
import PokemonDetails from './Pages/PokemonDetails';
import { persistor, store } from './store/configureStore';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
            <Route path="/favorites/" element={<FavoritesPokemon />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
