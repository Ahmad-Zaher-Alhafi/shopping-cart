import propTypes from "prop-types";

function Product({ imgUrl, name, price }) {
  return (
    <div className="product">
      <img className="=img" src={imgUrl} alt="Product picture" />
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
  );
}

Product.propTypes = {
  imgUrl: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
};

export default Product;
