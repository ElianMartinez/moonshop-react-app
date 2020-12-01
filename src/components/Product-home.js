import Product from "./product";
import image from "./img/jacket-de-pesca.png";
import "./productHome.css";
import { useState } from "react";

const ProductHome = () => {
  const [category, setcategory] = useState(1);
  return (
    <>
      <div className="container-fluid main">
        <div className="row justify-content-center">
          <div
            onClick={() => setcategory(1)}
            className={` select col-xs-12 col-md-4 ${
              category === 1 ? "active" : ""
            }`}
            id="popular-product-button"
          >
            PRODUCTOS POPULARES
          </div>
          <div
            onClick={() => setcategory(2)}
            className={` select col-xs-12 col-md-4 ${
              category === 2 ? "active" : ""
            }`}
            id="new-product-button"
          >
            PRODUCTOS NUEVOS
          </div>
          <div
            onClick={() => setcategory(3)}
            className={` select col-xs-12 col-md-4 ${
              category === 3 ? "active" : ""
            }`}
            id="discount-product-button"
          >
            PRODUCTOS CON DESCUENTOS
          </div>
        </div>
        <div
          className={`row products popular-products ${
            category !== 1 ? "d-none" : ""
          }`}
        >
          <Product name="Jean rotos" images={image} price="19.36" />
        </div>
        <div
          className={`row products new-products ${
            category !== 2 ? "d-none" : ""
          }`}
        >
          <Product name="Jean rotos" images={image} price="19.36" />
          <Product name="Jean rotos" images={image} price="19.36" />
        </div>
        <div
          className={`row products discount-products ${
            category !== 3 ? "d-none" : ""
          }`}
        >
          <Product name="Jean rotos" images={image} price="19.36" />
          <Product name="Jean rotos" images={image} price="19.36" />
          <Product name="Jean rotos" images={image} price="19.36" />
        </div>
      </div>
    </>
  );
};

export default ProductHome;
