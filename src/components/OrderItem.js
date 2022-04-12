import React from "react";
import { useNavigate } from 'react-router-dom';

const OrderItem = ({ data, setSelectedOrder }) => {
    let { number, billingAddress, items } = data;
    let itemQuantity = items.length;
    let navigate = useNavigate();

    const handleDetailButton = () => {
        setSelectedOrder(data);
        navigate(`/details/${number}`);
    }

    return (
        <div style={{ border: "thin solid gray", padding: "1rem"}}>
            <h4>Order #{number}</h4>
            <p>{billingAddress.firstName} {billingAddress.lastName}</p>
            {itemQuantity > 1 
                ? (<p>{itemQuantity} Items</p>) 
                : (<p>{itemQuantity} Item</p>)}
            <button onClick={handleDetailButton}>More Info</button>
        </div>
    );
};

export default OrderItem;