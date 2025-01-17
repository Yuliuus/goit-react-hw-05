import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";

import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendingMovies();
        setMovies(response.results);
        console.log(response);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again.</p>}
      <MoviesList movies={movies} />
    </div>
  );
}
