import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-metacritic'

export const fetchData = async (year) => {

  let changeableUrl = url

  if (year) {
    changeableUrl = `https://api.rawg.io/api/games?dates=${year}-01-01,${year}-12-31&ordering=-metacritic`
  }

  try {
    const data = await axios.get(changeableUrl)

    return data

  } catch (error) {
    console.log(error)
  }
}