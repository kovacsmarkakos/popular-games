import axios from "axios";
import { createUrl } from '../helpers'

export const fetchData = (year, genre) => {
  try {
    return axios
      .get(createUrl(year, genre))
      .then(data => data.data.results)
  } catch (error) {
    console.error(error);
  }
};

export const fetchGenres = () => {
  try {
    return axios
      .get("https://api.rawg.io/api/genres")
      .then(data => data.data.results);
  } catch (error) {
    console.error(error);
  }
};
