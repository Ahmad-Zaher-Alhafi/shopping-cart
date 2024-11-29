import propTypes, { string } from "prop-types";
import styles from "./product.module.css";

function Product({ imgUrl, name, price, productKey, inCart, addToCart }) {
  return (
    <div className={styles.product}>
      <div className="desc">
        <img className="=img" src={imgUrl} alt="Product picture" />
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>

      <div className="addToCart">
        {inCart ? (
          <div className="addedToCartText">In cart</div>
        ) : (
          <button onClick={() => addToCart(productKey)}>Add to cart</button>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  imgUrl: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  inCart: propTypes.bool,
  addToCart: propTypes.func,
  productKey: string,
};

export default Product;
