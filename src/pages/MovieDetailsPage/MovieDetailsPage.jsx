import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { getMovieById } from "../../movies-api";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!movie) {
      return <p>No movie data available.</p>;
    }
    const fetchMovieById = async () => {
      try {
        setLoading(true);
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      <img
        className={css.imgPoster}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className={css.posterInfo}>
        <h2 className={css.title}>{movie.original_title}</h2>
        <p>{movie.overview}</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
