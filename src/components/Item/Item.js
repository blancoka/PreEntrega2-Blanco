
import "./item.css";
import React, { useState } from 'react';


function Item (props) {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        if (props.stock > 0) {
        setCartCount(cartCount + 1);
        props.onAddToCart(props);
        }
    };
        
        return (
        <div className="item-card">
            <div className="item-card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="item-card-img">
                <img src={props.img} alt="imagen"></img>
            </div>
            <div className="item-card-detail">
                <h4>$ {props.price}</h4>
                <small>{props.category}</small>
            </div>
            <button style={{color:"#8003C9"}} onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}


export default Item
