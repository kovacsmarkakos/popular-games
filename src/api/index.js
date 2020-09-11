import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2008-01-01,2008-12-31&ordering=-metacritic'

export const fetchData = async () => {
  try {
    const data = await axios.get(url)

    return data

  } catch (error) {

  }
}