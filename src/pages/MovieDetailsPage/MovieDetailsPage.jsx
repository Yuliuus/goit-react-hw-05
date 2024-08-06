import { useEffect, useRef, useState, Suspense } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { getMovieById } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const location = useLocation();
  console.log(location);
  const backLinkRef = useRef(location.state ?? "/movies");

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
      <Link to={backLinkRef.current} className={css.goBackButton}>
        Go back
      </Link>
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
        <Suspense fallback={<div>Loading, please wait</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
