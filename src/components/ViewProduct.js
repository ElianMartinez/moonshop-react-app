import "./ViewProduct.css";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import Star from "./img/star.svg";
import Comentario from "./comentario";
import Valoracion from "./valoracion";
import Product from "./product";
let ViewProduct = () => {
  let idProduct =
    "https://firebasestorage.googleapis.com/v0/b/ecoomerce-moonshop.appspot.com/o/imgProduct%2Fblack-t-shit-mockup_125540-430.png?alt=media&token=f5e33266-52e6-4a89-b5e8-23e271d46251";

  const [data, setdata] = useState({});
  const [other, setother] = useState([]);
  const [stock, setstock] = useState(1);

  let getData = () => {
    let datos = [];
    db.collection("products")
      .where("img", "==", idProduct)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          datos.push(doc.data());
        });
      });

    setother(datos);
  };

  let getProducts = () => {
    db.collection("products")
      .where("category", "==", data.category)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setdata(doc.data());
        });
      });
  };

  useEffect(() => {
    getData();
    getProducts();
  }, data);

  return (
    <>
      <div className="container-fluid main p-0">
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
                  <div className="cantidad">
                    <div className="cont-cantidad ">
                      <button
                        onClick={() => {
                          setstock(stock > 1 ? stock - 1 : 1);
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
              <div className="btn-shopping">
                <svg
                  className=""
                  width="30"
                  height="30"
                  viewBox="0 0 58 58"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      fill="white"
                      d="M18.5018 45.1134C15.1576 45.1134 12.4467 47.8244 12.4467 51.1685C12.4467 54.5127 15.1577 57.2236 18.5018 57.2236C21.846 57.2236 24.5569 54.5126 24.5569 51.1685C24.557 47.8244 21.846 45.1134 18.5018 45.1134ZM18.5018 54.5325C16.6439 54.5325 15.1379 53.0265 15.1379 51.1686C15.1379 49.3108 16.6439 47.8047 18.5018 47.8047C20.3596 47.8047 21.8657 49.3108 21.8657 51.1686C21.8658 53.0265 20.3596 54.5325 18.5018 54.5325Z"
                    ></path>
                    <path
                      fill="white"
                      d="M44.068 45.1134C40.7238 45.1134 38.0129 47.8244 38.0129 51.1685C38.0129 54.5127 40.7239 57.2236 44.068 57.2236C47.4121 57.2236 50.1231 54.5126 50.1231 51.1685C50.1231 47.8244 47.4122 45.1134 44.068 45.1134ZM44.068 54.5325C42.2101 54.5325 40.7041 53.0265 40.7041 51.1686C40.7041 49.3108 42.2101 47.8047 44.068 47.8047C45.9259 47.8047 47.4319 49.3108 47.4319 51.1686C47.432 53.0265 45.9259 54.5325 44.068 54.5325Z"
                    ></path>
                    <path
                      fill="white"
                      d="M57.7257 9.79181C57.4455 9.48571 57.0621 9.29409 56.6493 9.25353L12.8504 8.64802L11.6394 4.94761C10.7862 2.47393 8.4698 0.803955 5.8533 0.776268H1.34559C0.602419 0.776268 0 1.37869 0 2.12186C0 2.86503 0.602419 3.46745 1.34559 3.46745H5.8533C7.31634 3.49977 8.60462 4.4392 9.08277 5.82226L17.6273 31.5903L16.9545 33.1377C16.2041 35.0727 16.4295 37.2505 17.56 38.991C18.6798 40.7003 20.5635 41.7553 22.606 41.8167H48.7778C49.521 41.8167 50.1234 41.2143 50.1234 40.4711C50.1234 39.7279 49.521 39.1255 48.7778 39.1255H22.6059C21.4525 39.0967 20.3907 38.4899 19.7802 37.5108C19.1765 36.5437 19.0524 35.3522 19.4438 34.2813L19.9821 33.0703L48.3067 30.11C51.418 29.7673 53.9773 27.5044 54.6983 24.4585L57.9278 10.9354C58.0733 10.5459 57.996 10.108 57.7257 9.79181ZM52.0744 23.8531C51.6375 25.8139 49.9728 27.2601 47.9704 27.4189L19.9821 30.3119L13.7251 11.3392L54.9673 11.9447L52.0744 23.8531Z"
                    ></path>
                  </g>
                </svg>
                <p>Agregar</p>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-xs-6 col-md-12 line"></div>
              </div>
              <div className="row">
                <div className=" m-2 d-flex add-list">
                  <svg
                    class=""
                    width="22"
                    height="30"
                    viewBox="0 0 58 52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="grey"
                      d="M28.9999 51.6013C28.1742 51.6013 27.3782 51.3022 26.7578 50.7588C24.4147 48.71 22.1557 46.7846 20.1627 45.0863L20.1525 45.0774C14.3093 40.0979 9.26338 35.7977 5.75255 31.5616C1.82798 26.8259 0 22.3358 0 17.4307C0 12.6649 1.63417 8.26819 4.60116 5.04986C7.60355 1.79347 11.7233 0 16.2027 0C19.5507 0 22.6168 1.05847 25.3157 3.14576C26.6777 4.19936 27.9123 5.48882 28.9999 6.99289C30.0881 5.48882 31.3222 4.19936 32.6847 3.14576C35.3835 1.05847 38.4496 0 41.7976 0C46.2766 0 50.3968 1.79347 53.3992 5.04986C56.3662 8.26819 57.9999 12.6649 57.9999 17.4307C57.9999 22.3358 56.1723 26.8259 52.2478 31.5612C48.737 35.7977 43.6915 40.0975 37.8491 45.0766C35.8526 46.7775 33.59 48.706 31.2417 50.7596C30.6217 51.3022 29.8252 51.6013 28.9999 51.6013ZM16.2027 3.39755C12.6835 3.39755 9.45056 4.80205 7.09865 7.35265C4.71178 9.94174 3.3971 13.5207 3.3971 17.4307C3.3971 21.5561 4.93038 25.2457 8.36819 29.3938C11.691 33.4033 16.6333 37.6151 22.3557 42.4919L22.3664 42.5007C24.3669 44.2057 26.6348 46.1386 28.9951 48.2024C31.3696 46.1346 33.6409 44.1986 35.6455 42.491C41.3675 37.6142 46.3094 33.4033 49.6321 29.3938C53.0695 25.2457 54.6028 21.5561 54.6028 17.4307C54.6028 13.5207 53.2881 9.94174 50.9012 7.35265C48.5498 4.80205 45.3164 3.39755 41.7976 3.39755C39.2196 3.39755 36.8526 4.21706 34.7627 5.83309C32.9002 7.27388 31.6028 9.09523 30.8421 10.3696C30.4509 11.025 29.7624 11.4162 28.9999 11.4162C28.2375 11.4162 27.549 11.025 27.1578 10.3696C26.3976 9.09523 25.1002 7.27388 23.2372 5.83309C21.1473 4.21706 18.7803 3.39755 16.2027 3.39755Z"
                    ></path>
                  </svg>
                  <button>Agregar a lista de deseo</button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-5 cont-img">
              <img className="img-fluid img" src={data.img} alt="" />
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>

        <br />
        <div className="container-fluid comentario-setion">
          <div className="row pl-5 pr-2">
            <div className="p-5 col-xs-12 col-sm-12 col-md-8">
              <Comentario star={[1, 2, 3]} />
              <Comentario star={[1, 2]} />
              <Comentario star={[1, 2, 3, 4, 5]} />
              <Comentario star={[5]} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 pt-5">
              <Valoracion></Valoracion>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5">
          <div className="row">
            {other.map((obj) => {
              return <Product image={obj.img} name={obj.name} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewProduct;
