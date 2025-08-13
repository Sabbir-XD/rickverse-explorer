import axios from "axios";

const API_BASE = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
  const res = await axios.get(`${API_BASE}/character`);
  return res.data.results;
};

export const getEpisodes = async () => {
  const res = await axios.get(`${API_BASE}/episode`);
  return res.data.results;
};

export const getLocations = async () => {
  const res = await axios.get(`${API_BASE}/location`);
  return res.data.results;
};
