import React from "react";
import styles from "./Header.module.css";
import SoundToggle from "./SoundToggle";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    width: "100vw",
    height: "40vh",
    alignItems: "center",
    margin: theme.spacing(0, 0, 3, 0),
    padding: theme.spacing(4, 2),
    textAlign: "center",
    textShadow:
      "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)",
    backgroundColor: "#3b3c38",
    zIndex: 1,
  },
  rawg: {
    position: "absolute",
    top: 10,
    right: 10,
    textShadow: "none",
  },
  rawgLink: {
    textDecoration: "none",
    color: "#f3f3f3",
    cursor: "pointer",
    "&:hover": {
      color: "#f5da55",
    },
  },
}));

const Header = ({ muted, setMuted }) => {
  const classes = useStyles();

  let textTheme = createMuiTheme();
  textTheme = responsiveFontSizes(textTheme);

  return (
    <>
      <header className={classes.header}>
        <div className={styles.overlay}></div>
        <ThemeProvider theme={textTheme}>
          <Typography variant="h1">
            <Box fontWeight="fontWeightBold" color="#f5da55" m={1}>
              Popular Games
            </Box>
          </Typography>
          <Typography variant="h6" component="h2">
            <Box fontWeight="600" letterSpacing={4} color="#fff" m={1}>
              The most popular games by Year and Genre
            </Box>
          </Typography>
          <Typography
            variant="caption"
            display="block"
            className={classes.rawg}
          >
            <a
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.rawgLink}
            >
              Source: RAWG API
            </a>
          </Typography>
        </ThemeProvider>
      </header>
      <SoundToggle muted={muted} setMuted={setMuted} />
    </>
  );
};

export default Header;
