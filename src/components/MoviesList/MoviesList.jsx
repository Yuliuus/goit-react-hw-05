import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.listItem} key={movie.id}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <p className={css.listItemTitle}>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
}
