import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";

const Details = ({order}) => {
  const [db, setDb] = useState(order.items);

  const addProduct = (data) => {
    data.id = Date.now();

    setDb([...db, data]);
  };

  return (
    <div>
      <h2>DETAILS</h2> 
      <article className="grid-1-2">
        <ProductForm
          addProduct={addProduct}
        />
        {/* {loading && <Loader />} */}
        {db && (
          <CrudTable
            data={db}
          />
        )}
      </article>
    </div>
  );
};

export default Details;