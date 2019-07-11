import axios from "axios";

const KEY = "AIzaSyBq8egQBJpoE2ZTFaWdjoHscertX16N53E";
const config = require("./environments/config");

export default axios.create({
  target: "serverless",
  publicRuntimeConfig: {
    graphqlUrl: config["GRAPHQL_URL"]
  },
  baseURL: "https://silkswap.com/graphql",
  params: { part: "snippet", maxResults: 5, key: KEY }
});
