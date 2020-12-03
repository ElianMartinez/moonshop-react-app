import "./config/firebase";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import loaderimg from "./loader.gif";
import ItemTable from "./components/item-table";

const AddProduct = () => {
  let category = [
    "t-shirt",
    "pantalones",
    "blusa",
    "camiseta",
    "camisas",
    "frio",
    "playa",
    "falda",
    "interior",
  ];

  const initialstatevalues = {
    name: "",
    price: 0,
    discont: 0,
    category: "t-shirt",
    mode: 1,
    img: "",
    shopping: 0,
  };

  const [values, setValues] = useState(initialstatevalues);
  const [loader, setloader] = useState(false);
  const [products, setProducts] = useState([]);
  const [valueUpload, setvalueUpload] = useState(0);

  

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    db.collection("products").onSnapshot((query) => {
      const docs = [];
      query.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    });
  };

  const handleImg = (e) => {
    let tmp = {
      name: values.name,
      price: values.price,
      discont: values.discont,
      category: values.category,
      mode: values.mode,
      img: "",
      shopping: values.shopping,
    };
    const file = e.target.files[0];
    tmp.img = file.name;
    setValues(tmp);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloader(true);
      await db.collection("products").doc().set(values);
      setloader(false);
      setValues(initialstatevalues);
    } catch (error) {
      console.log(error);
      setloader(false);
    }
  };

  return (
    <>
      <div className={`loaderForm ${loader === false ? "activar" : ""}`}>
        <img src={loaderimg} alt="" />
      </div>

      <form onSubmit={handleSubmit} className="container pt-5">
        <div className="row">
          <div className="form-group col-xs-12 col-md-8">
            <label htmlFor="inputName">Nombre del Producto</label>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              required
              value={values.name}
            />
          </div>
          <div className="form-group col-xs-12 col-md-4 ">
            <label htmlFor="precio">Precio RD$</label>
            <input
              onChange={handleInput}
              type="decimal"
              className="form-control"
              name="price"
              value={values.price}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-xs-12 col-md-4">
            <label htmlFor="descuento">Descuento</label>
            <select
              onChange={handleInput}
              className="form-control"
              name="discont"
              value={values.discont}
            >
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
              <option value="30">30%</option>
            </select>
          </div>
          <div className="form-group col-xs-12 col-md-4">
            <label htmlFor="category">Categoria</label>
            <select
              onChange={handleInput}
              className="form-control"
              name="category"
              id="category"
              value={values.category}
            >
              {category.map(function (num) {
                return (
                  <option key={num} value={num}>
                    {num}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="sexo">Sexo</label>
            <select
              onChange={handleInput}
              className="form-control"
              name="mode"
              id="mode"
              value={values.mode}
            >
              <option value="1">MASCULINO</option>
              <option value="2">FEMENINO</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="shopping">Veces comprado</label>
            <input
              onChange={handleInput}
              type="number"
              className="form-control"
              name="shopping"
              value={values.shopping}
            />
          </div>
          <div className="form-group col-md-8">
            <label htmlFor="img">Imagen</label>
            <input
              onChange={handleImg}
              type="file"
              className="form-control"
              name="img"
              required
            />
            <progress value={valueUpload} max="100"></progress>
          </div>
        </div>
        <div className="form-group d-flex justify-content-center">
          <input
            type="submit"
            className="btn btn-primary col-md-4 "
            value="Enviar"
          />
        </div>
      </form>

      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">descuento</th>
              <th scope="col">Sexo</th>
              <th scope="col">imagen</th>
              <th scope="col">Compras</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data) => {
              return <ItemTable key={data.id} datos={data} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddProduct;
