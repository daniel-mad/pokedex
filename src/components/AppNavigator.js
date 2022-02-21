import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  AppBar: {
    backgroundColor: 'black !important',
  },
  link: {
    textDecoration: 'none',
  },
  title: {
    color: 'white',
    cursor: 'pointer',
  },
}));

const AppNavigator = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h5" className={classes.title}>
            Pokedex
          </Typography>
        </Link>
        <Link to="/favorites" className={classes.link}>
          <Typography
            variant="h5"
            className={classes.title}
            style={{ marginLeft: 15 }}
          >
            Favorites
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavigator;
