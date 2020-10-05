const baseUrl = "https://api.rawg.io/api/games"

export function createUrl(year, genre) {
  return `${ baseUrl }?dates=${ year }-01-01,${ year }-12-31${ genre ? '&genres=' + genre : '' }`
}
