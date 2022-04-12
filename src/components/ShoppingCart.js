import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Details from '../pages/Details';
import './ShoppingCart.css';
import Loader from './Loader';
import Message from './Message';
import OrderItem from './OrderItem';

const ShoppingCart = () => {
    const [orders, setOrders] = useState(null);
    const [error, setError] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = "https://eshop-deve.herokuapp.com/api/v2/orders";

    useEffect(() => {
        setLoading(true);
        let options = {
            headers: {
                "content-type": "application/json",
                "Authorization": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ"
            },
        };

        helpHttp()
            .get(url, options)
            .then((res) => {
                console.log(res);
                if (!res.err) {
                    setOrders(res.orders);
                    setError(null);
                } else {
                    setOrders(null);
                    setError(res);
                }
                setLoading(false);
            });
    }, [url]);

    return (
        <div>
            <header>
                <h1>REACT EXERCISE</h1>
            </header>
            <div className="separator"></div>
            <Link style={{ textDecoration: 'none', color: '#40916c' }} to="/">ORDERS</Link>
            <Routes>
                <Route exact path="/" element={
                    <article className="box grid-responsive">
                        {loading && <Loader />}
                        {error && (
                            <Message
                                msg={`Error ${error.status}: ${error.statusText}`}
                                bgColor="#dc3545"
                            />
                        )}
                        {orders && orders.map(order => <OrderItem key={order.id} data={order} setSelectedOrder={setSelectedOrder} />)}
                    </article>
                } />
                <Route exact path="/details/:num" element={<Details order={selectedOrder} />} />
                <Route path="*" element={
                    <Message
                        msg="Error - Ruta no encontrada"
                        bgColor="#dc3545"
                    />
                } />
            </Routes>
        </div>
    );
}

export default ShoppingCart;