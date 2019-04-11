import axios from "axios";

const KEY = "AIzaSyBq8egQBJpoE2ZTFaWdjoHscertX16N53E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
