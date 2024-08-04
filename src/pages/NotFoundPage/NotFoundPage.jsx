import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h2>
        Page Not Found! Please, return to <Link to="/"> Home Page</Link>
      </h2>
    </>
  );
}
