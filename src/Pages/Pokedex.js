import { Box, CircularProgress, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';

const useStyles = makeStyles(theme => ({
  pokedexContainer: {
    textAlign: 'center',
    padding: '70px 10px 0 10px',
    backgroundColor: 'rgb(69, 69, 69)',
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(POKEMON_API_URL + '?limit=800');
        if (response.status >= 200 && response.status < 300) {
          const { results } = response.data;

          const data = results.map((pokemon, index) => ({
            id: ++index,
            url: IMAGE_API_URL + index + '.png',
            name: pokemon.name,
          }));
          setPokemonData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPokemons();
  }, []);

  return (
    <Box>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} img={pokemon.url} />
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Pokedex;
