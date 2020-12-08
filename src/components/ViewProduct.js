import "./ViewProduct.css";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import Star from "./img/star.svg";
let ViewProduct = () => {
  let idProduct =
    "https://firebasestorage.googleapis.com/v0/b/ecoomerce-moonshop.appspot.com/o/imgProduct%2Fblack-t-shit-mockup_125540-430.png?alt=media&token=f5e33266-52e6-4a89-b5e8-23e271d46251";

  const [data, setdata] = useState({});
  const [stock, setstock] = useState(1);

  let getData = () => {
    db.collection("products")
      .where("img", "==", idProduct)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setdata(doc.data());
        });
      });
  };

  useEffect(() => {
    getData();
  }, data);

  return (
    <>
      <div className="container-fluid main">
        <div className="container">
          <div className="row p-5">
            <div className="col-xs-12 col-md-7">
              <div>
                <p className="categoria">{data.category}</p>
                <h2 className="nombre">{data.name}</h2>
              </div>

              <div className="d-flex ">
                <p className="pr-5 d-flex">
                  <img className="star-img" src={Star} alt="" />
                  <img className="star-img" src={Star} alt="" />
                  <img className="star-img" src={Star} alt="" />
                  <img className="star-img" src={Star} alt="" />
                  <img className="star-img" src={Star} alt="" />
                </p>
                <p className="reviw">8 reviw</p>
              </div>

              <div className="size-area">
                <p>Size:</p>

                <div id="size-select" className="d-flex select-size">
                  <p className="a">S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <br />
              <div className=" row d-flex ">
                <div className="d-flex align-items-center">
                  <p className="precio">RD${data.price}</p>

                  <div className=" notification">
                    <p className="text-center">-{data.discont}%</p>
                  </div>
                  <div className="cantidad ">
                    <div className="cont-cantidad ">
                      <button
                        onClick={() => {
                          setstock(stock > 0 ? stock - 1 : 0);
                        }}
                      >
                        -
                      </button>
                      <button>{stock}</button>
                      <button
                        onClick={() => {
                          setstock(stock + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-5 d-flex justify-content-center">
              <img className="img-fluid img" src={data.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProduct;
