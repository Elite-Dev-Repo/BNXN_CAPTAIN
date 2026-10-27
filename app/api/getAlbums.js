import axios from "axios";

const options = {
  method: "GET",
  url: process.env.NEXT_PUBLIC_BASE_API_URL,
  params: {
    artistId: "3zaDigUwjHvjOkSn0NDf9x",
    type: "album",
  },
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
  },
};

export const getAlbums = async () => {
  try {
    const response = await axios.request(options);
    const data = response.data.albums;
    if (data) {
      if (data.items) {
        console.log(data.items);
        return data.items;
      }
    } else {
      return { error: "something went wrong" };
    }
  } catch (error) {
    console.error(error);
  }
};
