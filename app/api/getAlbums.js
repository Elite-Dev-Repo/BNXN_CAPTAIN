import axios from "axios";
import { AlbumData } from "./albums";

// const options = {
//   method: "GET",
//   url: process.env.NEXT_PUBLIC_BASE_API_URL,
//   params: {
//     artistId: "3zaDigUwjHvjOkSn0NDf9x",
//     type: "album",
//   },
//   headers: {
//     "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
//     "x-rapidapi-host": "spotify-scraper.p.rapidapi.com",
//   },
// };

export const getAlbums = async () => {
  const data = AlbumData.albums;
  if (data) {
    if (data.items) {
      console.log(data.items);
      return data.items;
    }
  } else {
    return { error: "something went wrong" };
  }
};
