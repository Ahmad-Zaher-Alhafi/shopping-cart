import { useEffect } from "react";
import Product from "./Product";
import styles from "./shoppingPage.module.css";
import propTypes from "prop-types";

function ShoppingPage({ products, setProducts }) {
  useEffect(() => {
    if (products.length > 0) return;

    fetchProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((reject) => console.error("Can not fetch products", reject));
  }, []);

  function addToCart(key) {
    const newProducts = products.map((product) => {
      if (product.key === key) {
        product.inCart = true;
      }

      return product;
    });

    setProducts(newProducts);

    console.log(newProducts);
  }

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
        inCart: false,
        key: crypto.randomUUID(),
      }));

      return products;
    } catch (error) {
      console.error("Can not fetch products", error);
    }
  }

  return (
    <div className="shoppingPage">
      <h1>Hey shopping page!</h1>

      <div className={styles.products}>
        {products.map((product) => {
          return (
            <Product
              imgUrl={product.imgUrl}
              name={product.name}
              price={product.price}
              inCart={product.inCart}
              addToCart={addToCart}
              productKey={product.key}
              key={product.key}
            ></Product>
          );
        })}
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {
  products: propTypes.array,
  setProducts: propTypes.func,
};

export default ShoppingPage;
