export const getGifs = async(category) =>{
  const key = 'xdxItKUpvVi2rEpKWMNq0T6Oq5mhnePY'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=5`
  const resp = await fetch(url);
  const {data} = await resp.json()
  const gifs = data.map(img =>({
    id:img.id,
    title:img.title,
    url: img.images.fixed_height.url
  }));
  return gifs;
}