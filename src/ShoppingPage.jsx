import { useEffect, useState } from "react";
import NavgationBar from "./NavigationBar";
import Product from "./Product";

function ShoppingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((reject) => console.error("Can not fetch products", reject));
  }, []);

  async function fetchProducts() {
    try {
      const request = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );

      if (request >= 400) {
        throw Error("Request denied", request);
      }

      const productsData = await request.json();
      console.log(productsData);

      const products = productsData.map((product) => ({
        imgUrl: product.image,
        name: product.title,
        price: product.price,
        key: crypto.randomUUID(),
      }));

      return products;
    } catch (error) {
      console.error("Can not fetch products", error);
    }
  }

  return (
    <div className="shoppingPage">
      <NavgationBar></NavgationBar>
      <h1>Hey shopping page!</h1>

      {products.map((product) => {
        return (
          <Product
            imgUrl={product.imgUrl}
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
