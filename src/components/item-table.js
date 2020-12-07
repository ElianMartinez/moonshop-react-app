const ItemTable = (props) => {
  return (
    <>
      <tr>
        <th scope="row">{props.datos.name}</th>
        <td>{props.datos.category}</td>
        <th scope="row">RD${props.datos.price}</th>
        <td>{props.datos.discont}</td>
        <td>{props.datos.mode}</td>
        <td>
          <img src={props.datos.img} width="200px" alt="" />
        </td>
        <td>{props.datos.shopping}</td>
      </tr>
    </>
  );
};

export default ItemTable;
