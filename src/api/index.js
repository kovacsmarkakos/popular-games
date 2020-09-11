import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2012-01-01,2012-12-31&ordering=-metacritic'

export const fetchData = async () => {
  try {
    const data = await axios.get(url)

    return data

    // return { id, name, metacritic, released, background_image }

  } catch (error) {

  }
}