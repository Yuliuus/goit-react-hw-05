import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

function App() {
  const AuthorizationKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2ZlYzM0ZmU4OWRjODhkNzFiNzUwZjBjMmU4MTk4MSIsIm5iZiI6MTcyMjUzMTU3NC43ODIyNjQsInN1YiI6IjY2YWJiYjY0N2QyNzUyYTg0NjY4NjVmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJUncJj0y2_JBQOd5b4lt0eCS57KTKBO8YRulzdx278";
  const ApiKey = "7cfec34fe89dc88d71b750f0c2e81981";
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
