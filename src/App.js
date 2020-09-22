import React, { useState, useEffect } from "react";
import { fetchData, fetchGenres } from "./api";
import Filters from "./components/Filters.jsx";
import CardGrid from "./components/CardGrid.jsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3b3c38",
    },
    secondary: {
      main: "#f5da55",
    },
  },
});

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [year, setYear] = useState(0);
  const [fetchedGenres, setFetchedGenres] = useState([]);
  const [genre, setGenre] = useState("");
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedGenres(await fetchGenres());
    };
    fetchAPI();
  }, [setFetchedGenres]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetchData(year, genre);

      setItems(result);
      setIsLoading(false);
    };
    fetchItems();
  }, [year, genre]);

  return (
    <>
      <CssBaseline />
      {
        <ThemeProvider theme={theme}>
          <div className={styles.container}>
            <Header muted={muted} setMuted={setMuted} />
            <Filters
              className={styles.filters}
              year={year}
              setYear={setYear}
              genre={genre}
              setGenre={setGenre}
              fetchedGenres={fetchedGenres}
            />
            <CardGrid
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              items={items}
              muted={muted}
              setMuted={setMuted}
            />
            <Footer />
          </div>
        </ThemeProvider>
      }
    </>
  );
};

export default App;
