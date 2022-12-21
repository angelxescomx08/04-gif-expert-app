export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rn5B6tqtKopC8pWpWLboyXWe4zhvrnbl&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}