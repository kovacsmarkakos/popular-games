import axios from 'axios'

const url = 'https://api.rawg.io/api/games?dates=2009-01-01,2009-12-31&ordering=-metacritic'

export const fetchData = async () => {
  /*
  let changeableUrl = url

  if (year) {
    changeableUrl = `https://api.rawg.io/api/games?dates=${year}-01-01,${year}-12-31&ordering=-metacritic`
  }
*/
  try {
    const data = await axios.get(url)

    return data

  } catch (error) {
    console.log(error)
  }
}