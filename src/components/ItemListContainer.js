import React, { useState } from 'react';
import Item from './Item/Item';
import PantPetunia from '../img/PantPetunia.jpeg';
import { Link } from 'react-router-dom';
import Top from '../img/TOP.jpeg';
import SeccionPollera from '../img/SeccionPollera.jpeg';
import PantJacinto from '../img/PantJacinto.jpeg';
import PolleraVioleta from '../img/PolleraVioleta.jpeg';
import RemeMagnolia from '../img/RemeMagnolia.jpeg';
import PolleraLila from '../img/PolleraLila.jpeg';
import CartWidget from './CartWidget';

function ItemListContainer() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
    };
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px', marginLeft:'50px'}}>
                <div>
                    <div>
                    <img src={Top} alt="encabezado" width="70%" height="140%" style={{ marginLeft: '50px' }} />
                    </div>
                    <h3 style={{alignItems: 'center', marginLeft:'80px'}}>
                    REMERAS & TOPS
                    </h3>
                    <button style={{alignItems: 'center', marginLeft:'150px', color:'#8003C9'}}>
                    <p style={{alignItems: 'center', marginLeft:'0px', color:'#8003C9', marginTop: '10px'}}>
                        <Link to="/Remeras"> VER SECCION
                        </Link>
                    </p>
                    </button>
                </div>
                <div>
                    <div>
                    <img src={SeccionPollera} alt="encabezado" width="70%" height="140%" style={{ marginLeft: '50px' }} />
                    </div>
                    <h3 style={{alignItems: 'center', marginLeft:'130px'}}>
                    POLLERAS
                    </h3>
                    <button style={{alignItems: 'center', marginLeft:'150px', color:'#8003C9'}}>
                    <p style={{alignItems: 'center', marginLeft:'0px', color:'#8003C9', marginTop: '10px'}}>
                        <Link to="/Polleras"> VER SECCION
                        </Link>
                    </p>
                    </button>
                </div>
                <div>
                    <div>
                    <img src={PantPetunia} alt="encabezado" width="70%" height="140%" style={{ marginLeft: '50px' }} />
                    </div>
                    <h3 style={{alignItems: 'center', marginLeft:'110px'}}>
                    PANTALONES
                    </h3>
                    <button style={{alignItems: 'center', marginLeft:'150px', color:'#8003C9'}}>
                    <p style={{alignItems: 'center', marginLeft:'0px', color:'#8003C9', marginTop: '10px'}}>
                        <Link to="/Pantalones"> VER SECCION
                        </Link>
                    </p>
                    </button>
                </div>
            </div>
            <div style={{ marginLeft: '20px', display: 'flex', justifyContent: 'center', marginBottom:'60px', marginTop:'70px', fontWeight:'bold' }}>
                <h2>NUEVOS INGRESOS</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px' }}>
                <div> 
                    <Item title="Pantalon Jacinto" price="800" img={PantJacinto} category="Pantalones" stock={5} onAddToCart={handleAddToCart}/>
                </div>
                <div>
                    <Item title="Remera Magnolia" price="550" img={RemeMagnolia} category="Remeras" stock={5} onAddToCart={handleAddToCart}/>
                </div>
                <div>
                    <Item title="Pollera Violeta" price="800" img={PolleraVioleta} category="Polleras" stock={5} onAddToCart={handleAddToCart}/>
                </div>
                <div>
                    <Item title="Pollera Lila" price="600" img={PolleraLila} category="Polleras" stock={5} onAddToCart={handleAddToCart}/>
                </div>
            </div>
            <CartWidget cartItemCount={cartItems.length} />
        </div>
    )
}

export default ItemListContainer;