// ItemDetail.js
import React from 'react';
import ItemCount from './ItemCount/ItemCount';

const ItemDetail = () => {
    const handleAddToCart = (count) => {
  // Lógica para agregar al carrito
    };

    return (
    <div>
      {/* Contenido del detalle del ítem */}
        <h2>Detalles del ítem</h2>
      {/* Otros elementos del detalle del ítem */}
    
      {/* Componente ItemCount */}
        <ItemCount onAdd={handleAddToCart} />
    </div>
    );
};

export default ItemDetail;
