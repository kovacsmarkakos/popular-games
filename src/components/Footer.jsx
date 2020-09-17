import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { IconButton, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://kovacsmarkakos.github.io/">
        Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '15vh',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  footerIcons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1">Made by Mark Kovacs</Typography>
          <Copyright />
        </Container>
        <Container className={classes.footerIcons}>
          <a href="https://www.linkedin.com/in/márk-kovács-0363b61b7/"
            target="_blank"
            rel="noopener noreferrer">
            <IconButton aria-label="github">
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/kovacsmarkakos"
            target="_blank"
            rel="noopener noreferrer">
            <IconButton aria-label="linkedin">
              <GitHubIcon />
            </IconButton>
          </a>
        </Container>
      </footer>
    </div>
  )
}

export default Footer