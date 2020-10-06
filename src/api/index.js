import axios from "axios";
import { createUrl } from "../helpers";

export const fetchData = async (year, genre) => {
  try {
    const data = await axios.get(createUrl(year, genre));
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGenres = async () => {
  try {
    const data = await axios.get("https://api.rawg.io/api/genres");
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};
