import { getMovieReviews } from "../../movies-api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./MovieReviews.module.css";

export default function MovieCast() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async (movieId) => {
      try {
        setLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {!loading && reviews.length === 0 && <p>No reviews available!</p>}
      {reviews.length > 0 && (
        <>
          <h2>Reviews</h2>
          <ul className={css.reviewList}>
            {reviews.map(
              ({ id, author_details: { name, username }, content }) => (
                <li key={id} className={css.reviewItem}>
                  <div className={css.reviewHeader}>
                    <p className={css.reviewAuthor}>{name}</p>
                    <p className={css.reviewAuthor}>@{username}</p>
                  </div>
                  <p className={css.reviewContent}>{content}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
}
