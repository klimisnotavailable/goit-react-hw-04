import axios from "axios";

const authorizationKey = "1pUp1SllGcquklUwe0Q96HW4gfYmkuhyOZX77G3qGBY";
axios.defaults.headers.common["Authorization"] = `Client-ID ${authorizationKey}`;
axios.defaults.headers.common["Accept-Version"] = "v1";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (searchQuery, page) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      page,
    }
  });
  
  return response.data;
}
