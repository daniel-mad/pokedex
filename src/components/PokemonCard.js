import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    cursor: 'pointer',
    backgroundColor: 'black !important',
    color: 'white !important',
    '&:hover': {
      backgroundColor: 'rgb(90, 90, 90) !important',
    },
  },
  cardMedia: {
    margin: 'auto',
    width: 130,
    height: 130,
  },
  cardContent: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));

const PokemonCard = ({ pokemon, img }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={2}>
      <Link className={classes.link} to={'/pokemon/' + pokemon.id}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={img} />
          <CardContent className={classes.cardContent}>
            <Typography>{pokemon.name}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default PokemonCard;
