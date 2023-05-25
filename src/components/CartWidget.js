
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ cartItemCount }) => {
    return (
    <div className="cart-widget">
        <Link to="/carrito" className="cart-link">
        <FaShoppingCart className="cart-icon" />
        <span className="badge">{cartItemCount}</span>
        </Link>
    </div>
    );
};

export default CartWidget;
