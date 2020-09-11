import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2018-01-01,2018-12-31&ordering=-metacritic'

export const fetchData = async () => {
  try {
    const data = await axios.get(url)

    return data

  } catch (error) {

  }
}