import axios from "axios";

const timeStamp = 1687800983;
const apiKey = "863d8393c70ea98e66315d62cf112c7d";
const md5 = "addd882d6430936a1956bf559f1179b9";

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`,
  timeout: 5000,
});

export default api;
