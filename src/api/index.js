import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added'

export const fetchData = async () => {
  try {
    const response = await axios.get(url)

    return response
  } catch (error) {
    console.log(error)
  }
}