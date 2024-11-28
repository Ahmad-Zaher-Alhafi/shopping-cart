import { useState } from "react";
import NavgationBar from "./NavigationBar";
import Product from "./Product";

function ShoppingPage() {
  const [products, setProducts] = useState([]);

  return (
    <div className="shoppingPage">
      <NavgationBar></NavgationBar>
      <h1>Hey shopping page!</h1>

      {products.map((product) => {
        return (
          <Product
            imgUrl={product.key.imgUrl}
            name={product.name}
            price={product.price}
            key={product.key}
          ></Product>
        );
      })}
    </div>
  );
}

export default ShoppingPage;
