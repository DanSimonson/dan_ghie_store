import React from "react";
import data from "../data";
import Product from "../components/Product";

function HomePage() {
  return (
    <div>
      <div>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
