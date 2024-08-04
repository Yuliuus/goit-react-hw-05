import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const AccessKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2ZlYzM0ZmU4OWRjODhkNzFiNzUwZjBjMmU4MTk4MSIsIm5iZiI6MTcyMjcwODk2Ni42NTQ4Niwic3ViIjoiNjZhYmJiNjQ3ZDI3NTJhODQ2Njg2NWZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.u6tKphAnpIDgrYvwIIRlXULmtLtJ8RwpBfjNes3ViUM";

axios.defaults.headers.common["Authorization"] = `Bearer ${AccessKey}`;

export const getTrendingMovies = async () => {
  const responce = await axios.get("/trending/movie/day")
  return responce.data;
}

export const getMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};