import { Favorite } from '@mui/icons-material';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../config';
import { toggleFavorite } from '../store/favorites';

const useStyles = makeStyles(theme => ({
  pokedexContainer: {
    height: '84vh',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 75,
    textAlign: 'center',
    borderRadius: 5,
    paddingTop: 30,
  },
  textTitle: {
    fontFamily: 'fantasy !important',
    textTransform: 'upperCase',
  },

  pokemonImage: {
    width: '170px',
    height: '170px',
  },

  pokemonInfoContainer: {
    bottom: 60,
    position: 'absolute',
    width: '100%',
  },

  seperator: {
    height: '0.01mm',
    width: '95%',
  },

  favorite: {
    width: 50,
    height: 50,
    marginTop: 15,
  },
  text: {
    fontSize: 30,
  },
}));

const PokemonDetails = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.entities.favorites);
  const classes = useStyles();
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const toggle = pokemon => {
    dispatch(toggleFavorite(pokemon));
  };

  useEffect(() => {
    const getPokemon = async id => {
      try {
        const response = await axios.get(`${POKEMON_API_URL}/${id}`);
        if (response.status >= 200 && response.status < 300) {
          setPokemon(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPokemon(id);
  }, []);

  if (pokemon) {
    const {
      name,
      sprites: { front_default: image },
      weight,
      height,
      types,
    } = pokemon;
    return (
      <Box>
        <Box className={classes.pokedexContainer}>
          <Typography className={classes.textTitle} variant="h1">
            {name}
          </Typography>
          <img className={classes.pokemonImage} src={image} />
          <Box className={classes.pokemonInfoContainer}>
            <hr className={classes.seperator} />
            <Grid container>
              <Grid item md={1}>
                <Button
                  onClick={() => toggle(pokemon)}
                  className={classes.favorite}
                >
                  <Favorite
                    style={{
                      color: favorites.find(f => f.id === pokemon.id)
                        ? 'red'
                        : 'white',
                      fontSize: 50,
                    }}
                  />
                </Button>
              </Grid>
              <Grid className={classes.text} item md={2}>
                Name
                <br />
                {name}
              </Grid>
              <Grid className={classes.text} item md={2}>
                Height
                <br />
                {height} m
              </Grid>
              <Grid className={classes.text} item md={2}>
                Weigth
                <br />
                {weight} kg
              </Grid>
              {types.map(type => (
                <Grid key={type.slot} className={classes.text} item md={2}>
                  Type
                  <br />
                  {type.type.name}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
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
    );
  }
};

export default PokemonDetails;
