import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import ShoppingPage from "./ShoppingPage";

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "shoppingPage",
    element: <ShoppingPage></ShoppingPage>,
  },
];

export default routes;
