import React from "react";
import Rateing from "./Rateing";
function Product(props) {
  const { product } = props;
  return (
    <div className="card">
      <a href={`/product/${product._id}`}>
        {/* image size: 680px by 830px */}
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rateing
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rateing>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
