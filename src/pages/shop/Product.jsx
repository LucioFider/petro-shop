const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="product-image" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>K{price}</p>
      </div>
    </div>
  );
};

export default Product;
