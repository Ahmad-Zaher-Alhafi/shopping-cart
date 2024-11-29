import { useParams } from "react-router-dom";
import NavgationBar from "./NavigationBar";
import ShoppingPage from "./ShoppingPage";
import { useState } from "react";

function HomePage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  return (
    <div className="container">
      <NavgationBar></NavgationBar>
      {name === "shoppingPage" && (
        <ShoppingPage
          products={products}
          setProducts={setProducts}
        ></ShoppingPage>
      )}

      <h1>hey home page</h1>
    </div>
  );
}

export default HomePage;
