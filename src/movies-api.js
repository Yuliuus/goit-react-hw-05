import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const AccessKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2ZlYzM0ZmU4OWRjODhkNzFiNzUwZjBjMmU4MTk4MSIsIm5iZiI6MTcyMjcwODk2Ni42NTQ4Niwic3ViIjoiNjZhYmJiNjQ3ZDI3NTJhODQ2Njg2NWZiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.u6tKphAnpIDgrYvwIIRlXULmtLtJ8RwpBfjNes3ViUM";

axios.defaults.headers.common["Authorization"] = `Bearer ${AccessKey}`;

export const getTrendingMovies = async () => {
    const responce = await axios.get("/trending/movie/day")
    return responce.data;
}