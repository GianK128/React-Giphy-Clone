const apiKey = `${process.env.REACT_APP_GIPHY_API_KEY}`
const baseURL = "https://api.giphy.com/v1"

const getTrendingTerms = () => {
  return fetch(`${baseURL}/trending/searches?api_key=${apiKey}`)
    .then(response => response.json())
}

export default getTrendingTerms