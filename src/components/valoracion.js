import "./valoracion.css";
import Star from "./img/star.svg";

let Valoracion = () => {
  return (
    <>
      <div className="line"></div>
      <div className="row pl-3 pt-3">
        <div className="col-xs-8">
          <div>
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
          </div>
          <br />
          <div>
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
          </div>
          <br />
          <div>
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
          </div>
          <br />
          <div>
            <img src={Star} className="ml-1" width="15px" alt="" />
            <img src={Star} className="ml-1" width="15px" alt="" />
          </div>
          <br />
          <div>
            <img src={Star} className="ml-1" width="15px" alt="" />
          </div>
        </div>

        <div className="col-xs-4 color "></div>
        <div className="ml-2">
          <p>58% 4 reviws</p>

          <p className="mt-4">58% 4 reviws</p>

          <p className="mt-4">0% 0 reviws</p>

          <p className="mt-4">25% 2 reviws</p>

          <p className="mt-4">8% 1 reviws</p>
        </div>
      </div>
    </>
  );
};

export default Valoracion;
