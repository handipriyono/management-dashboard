import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com/posts", //TODO: update
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
