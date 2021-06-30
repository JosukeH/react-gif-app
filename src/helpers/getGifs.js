export const getGifs = async (categoria) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=u7nAvx1yjy3jlXS3ll2NIdq6QVW8Ju5O&q=${categoria}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };