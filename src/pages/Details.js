import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import CrudTable from "../components/CrudTable";
import { useNavigate } from 'react-router-dom';
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modal";


const Details = ({order}) => {
  const [db, setDb] = useState(order.items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  let navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    db.forEach(item => {
      price += item.price * item.quantity;
    });
    setTotalPrice(price.toFixed(2));
  }, [db]);

  const addProduct = (data) => {
    data.id = Date.now();
    data.price = Number(data.price).toFixed(2);

    setDb([...db, data]);
  };

  const handlePayment = () => navigate("/");
  
  return (
    <div>
      <h2>DETAILS OF ORDER #{order.number}</h2> 
      
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Confirmation</h3>
        <p>
          Are you sure you want to pay $ {totalPrice} ?
        </p>
        <button style={{float: 'right'}} onClick={handlePayment}>Confirm</button>
      </Modal>
      <article className="grid-1-2">
        <ProductForm
          addProduct={addProduct}
        />
        {db && (
          <CrudTable
            data={db}
          />
        )}
      </article>
      <button className="pay-button" onClick={openModal}>Pay Now $ {totalPrice}</button>
    </div>
  );
};

export default Details;