import Product from "./product";
import { db } from "../config/firebase";
import "./productHome.css";
import { useState, useEffect } from "react";

const ProductHome = () => {
  const [category, setcategory] = useState(1);
  const [produts, setprodutsPopular] = useState([]);
  const [news, setnews] = useState([]);
  const [discount, setdiscount] = useState([]);

  let getPopular = () => {
    let dato = [];
    db.collection("products")
      .where("shopping", ">=", "6")
      .orderBy("shopping", "desc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          dato.push({ ...doc.data(), id: doc.id });
        });
      });
    setprodutsPopular(dato);
  };

  let getNew = () => {
    let dato = [];
    db.collection("products")
      .where("shopping", "<=", "3")
      .orderBy("shopping", "asc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          dato.push({ ...doc.data(), id: doc.id });
        });
      });
    setnews(dato);
  };

  let getdiscount = () => {
    let dato = [];
    db.collection("products")
      .where("discont", ">=", "1")
      .orderBy("discont", "asc")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          dato.push({ ...doc.data(), id: doc.id });
        });
      });
    setdiscount(dato);
  };

  useEffect(() => {
    getPopular();
    getNew();
    getdiscount();
  }, produts);

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
          {produts.map(function (product) {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                images={product.img}
                price={product.price}
              />
            );
          })}
        </div>
        <div
          className={`row products new-products ${
            category !== 2 ? "d-none" : ""
          }`}
        >
          {news.map(function (product) {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                images={product.img}
                price={product.price}
              />
            );
          })}
        </div>
        <div
          className={`row products discount-products ${
            category !== 3 ? "d-none" : ""
          }`}
        >
          {discount.map(function (product) {
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                images={product.img}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductHome;
