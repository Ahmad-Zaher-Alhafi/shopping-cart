import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const routes = [
  {
    path: "/homePage",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/homePage/:name",
    element: <HomePage></HomePage>,
  },
];

export default routes;
