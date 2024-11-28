import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Ops, Nothing to do here</h1>
      <Link to={"/"}> Go back to home page</Link>
    </>
  );
}

export default ErrorPage;
