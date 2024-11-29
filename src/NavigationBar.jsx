import { Link } from "react-router-dom";

function NavgationBar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to={"/homePage"}>Home page</Link>
        </li>

        <li>
          <Link to={"/homePage/shoppingPage"}>Shopping page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavgationBar;
