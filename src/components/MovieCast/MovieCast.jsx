import { getMovieCast } from "../../movies-api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async (movieId) => {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        setCast(response.cast);
        console.log(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {cast.length > 0 && (
        <>
          <h2>Cast</h2>
          <ul className={css.castList}>
            {cast.map(({ id, profile_path, original_name, character }) => {
              return (
                <li key={id} className={css.castItem}>
                  <img
                    className={css.castImage}
                    src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                    alt={original_name}
                  />
                  <div className={css.castDetails}>
                    <h3 className={css.castName}>{original_name}</h3>
                    <p className={css.castRole}>Role: {character}</p>
                  </div>
                </li>
              );
            })}
          </ul>{" "}
        </>
      )}
    </div>
  );
}
