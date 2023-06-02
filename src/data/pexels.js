import axios from "axios";

const PEXELS_API_KEY =
  "TsYIsDrA2TtGt3Hivr05V0pAw9eU8fDqX7msFcrE0945m70cT3mzU9Sa";

export const searchPexelsImages = async (searchTerm, quantity) => {
  const response = await axios.get("https://api.pexels.com/v1/search", {
    params: {
      query: searchTerm,
      //MAX is 80
      per_page: quantity,
      page: 1,
    },
    headers: {
      Authorization: PEXELS_API_KEY,
    },
  });

  console.log(response);

  //   response.data.photos.forEach((photo) => {
  //     photo.urls = photo.src;
  //   });

  return response.data.photos;
};
