import React from "react";

const CrudTableRow = ({ el }) => {
  let { name, price, quantity, sku } = el;

  return (
    <tr>
      <td>{sku}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  );
};

export default CrudTableRow;