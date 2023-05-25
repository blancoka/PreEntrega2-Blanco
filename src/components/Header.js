
import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../img/Header.jpeg';
import { FaTruck } from 'react-icons/fa';
import { FaTape } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Head() {
    return (
    <div>
        <img src={Header} alt="encabezado" width="98%" height="70%" style={{ marginLeft: '10px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px' }}>
        <div style={{ marginLeft: '100px', display: 'flex', alignItems: 'center' }}>
            <FaTape style={{ marginRight: '35px', fontSize: '50px', color: '#8003C9'  }} />
            <div>
            <h3 style={{ margin: '0' }}>Prendas a medida</h3>
            <p>Elegí la prenda que más te guste, y la hacemos a tu medida</p>
            </div>
        </div>
        <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
            <FaTruck style={{ marginRight: '35px', fontSize: '50px', color: '#8003C9' }} />
            <div>
            <h3 style={{ margin: '0' }}>Envío gratis</h3>
            <p>En compras mayores a $1500</p>
            </div>
        </div>
        <div style={{ marginRight: '150px', display: 'flex', alignItems: 'center' }}>
            <FaMapMarkerAlt style={{ marginRight: '35px', fontSize: '50px', color: '#8003C9' }}/>
            <div>
            <h3 style={{ margin: '0' }}>Pick up</h3>
            <p>Retiro gratis en Cordón</p>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Head;
