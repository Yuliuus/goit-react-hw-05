import { useEffect, useState } from "react";
import { getSearchMovies } from "../../movies-api";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("movie") ?? "";

  const handleSearch = async (newTopic) => {
    setMovies([]);
    setPage(1);
    setTopic(newTopic);
    setSearchParams({ movie: newTopic });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    await handleSearch(topic);
    form.reset();
  };

  useEffect(() => {
    if (searchValue) {
      setTopic(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function fetchMoviesSearch() {
      try {
        setLoading(true);
        setError(false);
        const data = await getSearchMovies(topic, page, searchParams);
        setMovies((prevMovies) => {
          return [...prevMovies, ...data.results];
        });
        setHasMore(data.page < data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesSearch();
  }, [topic, page, searchParams]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          placeholder="Search movie"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again.</p>}
      <MoviesList movies={movies} />

      {hasMore && !loading && (
        <button onClick={loadMoreMovies}>Load More</button>
      )}
    </>
  );
}
