import "./comentario.css";
import Imagen from "./img/kisspng-t-shirt-clothing-fendi-crew-neck-camisas-5b0fddbf0cd156.7105159815277664630525 (1).png";
import Star from "./img/star.svg";

let Comentario = (props) => {
  return (
    <>
      <div className="line"></div>
      <br />

      <div className="d-flex ">
        <div>
          <img src={Imagen} className="img-round" width="50px" alt="" />
        </div>
        <div className="ml-3 ">
          <p className="m-0 name">Meagan Fisher</p>
          {props.star.map((val) => {
            return (
              <img
                key={val}
                src={Star}
                width="10px"
                className="mr-1"
                alt=""
                srcset=""
              />
            );
          })}
        </div>
        <div className="ml-3">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            pariatur delectus numquam corrupti accusantium quis assumenda ab
            esse ut dignissimos provident, nam similique dolor quisquam
            excepturi quam. Laudantium, obcaecati maxime.
          </p>
          <p className="description" s>
            21 sep 2020
          </p>
        </div>
      </div>
      <br />
    </>
  );
};

export default Comentario;
