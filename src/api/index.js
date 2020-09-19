import axios from "axios";

const url = "https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31";

export const fetchData = async (year, genre) => {
  let changeableUrl = url;

  if (year && genre) {
    changeableUrl = `https://api.rawg.io/api/games?dates=${year}-01-01,${year}-12-31&genres=${genre}`;
  } else if (year) {
    changeableUrl = `https://api.rawg.io/api/games?dates=${year}-01-01,${year}-12-31`;
  } else if (genre) {
    changeableUrl = `https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&genres=${genre}`;
  } else {
    changeableUrl = url;
  }

  try {
    const {
      data: { results },
    } = await axios.get(changeableUrl);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGenres = async () => {
  try {
    const {
      data: { results },
    } = await axios.get("https://api.rawg.io/api/genres");

    return results;
  } catch (error) {
    console.log(error);
  }
};
