export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=D6JvBOSnTtdkVktwPuuFjYqz276Fdu8R&q=${category}&limit=10&offset=0&rating=g`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}
