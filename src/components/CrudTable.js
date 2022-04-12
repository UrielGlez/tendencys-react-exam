import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <div>
        <h3>Product Table</h3>
        <table>
            <thead>
                <tr>
                    <th>Sku</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((el) => (
                    <CrudTableRow
                        key={el.id}
                        el={el}
                    />
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">Empty</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  );
};

export default CrudTable;