import Product from "./Product";
import "./shop.css";
import { PRODUCTS } from "../../products";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Petro-Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
