import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID r4S83d_DYYJD7T8eLDj1pVGwnJWKOIxcVsvo6d2Y0iE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
