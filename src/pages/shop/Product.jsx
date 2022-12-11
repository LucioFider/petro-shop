import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt="product-image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>K{price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
