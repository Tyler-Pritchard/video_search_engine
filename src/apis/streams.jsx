import axios from "axios";

export default axios.create({
  baseURL: "http://silkswap.com/graphql"
});
