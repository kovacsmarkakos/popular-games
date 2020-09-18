import React from 'react';
import SoundToggle from './SoundToggle'
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, Typography, Container, Link, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(0, 0, 3, 0),
    padding: theme.spacing(4, 2),
    textAlign: 'center',
    width: '100vw',
    height: '40vh',
    backgroundColor: '#3b3c38',
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
          <Typography variant="h1">
            <Box
              fontWeight="fontWeightBold"
              color="#f5da55"
              m={1}>
              Popular Games
            </Box>
          </Typography>
          <Typography variant="h6" component="h2">
            <Box
              fontWeight="600"
              letterSpacing={4}
              color="#fff"
              m={1}>
              The most popular games by Year and Genre
            </Box>
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