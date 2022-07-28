const apiKey = `${process.env.REACT_APP_GIPHY_API_KEY}`
const baseURL = "https://api.giphy.com/v1"

const getGifsBySearch = ({ keyword = 'panda', quantity = 10, page = 0 } = {}) => {
  return fetch(`${baseURL}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${quantity}&offset=${page * quantity}&rating=G&lang=es`)
    .then(res => res.json())
    .then(response => {
        const {data} = response
        if (Array.isArray(data)) {
          const gifs = data.map(image => {
              const {images, title, id} = image
              const {url} = images.downsized_medium
              return {title, id, url}
            })
          return gifs
        }
    })
    .catch(error => {
      console.log(error)
      return []
    })
}

export { getGifsBySearch }