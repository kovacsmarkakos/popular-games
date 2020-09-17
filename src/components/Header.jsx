import React from 'react';
import SoundToggle from './SoundToggle'
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
    textAlign: 'center',
  },
}));

const Header = ({ muted, setMuted }) => {
  const classes = useStyles();

  let textTheme = createMuiTheme();
  textTheme = responsiveFontSizes(textTheme);

  return (
    <CssBaseline>
      <header className={classes.header}>
        <ThemeProvider theme={textTheme}>
          <Typography variant="h1" gutterBottom>
            Popular Games
        </Typography>
          <Typography variant="h5" gutterBottom>
            The most popular games by year and genre
        </Typography>
        </ThemeProvider>
      </header>
      <SoundToggle
        muted={muted}
        setMuted={setMuted} />
    </CssBaseline>
  )
}

export default Header