import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from '../components/PokemonCard';

const useStyles = makeStyles(theme => ({
  pokedexContainer: {
    height: '100vh',
    textAlign: 'center',
    padding: '70px 10px 0 10px',
    backgroundColor: 'rgb(69, 69, 69)',
  },
}));
const FavoritesPokemon = () => {
  const favorites = useSelector(state => state.favorites);
  const classes = useStyles();
  return (
    <Box className={classes.pokedexContainer}>
      <Grid container className={classes.pokedexContainer} spacing={5}>
        {favorites.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            img={pokemon.sprites.front_default}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default FavoritesPokemon;
