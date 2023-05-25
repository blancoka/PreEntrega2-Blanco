

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Nosotras from './pages/Nosotras';
import Contacto from './pages/Contacto';
import FAQ from './pages/FAQ';
import Carrito from './pages/Carrito';


function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/nosotras" component={Nosotras} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/faq" component={FAQ} />
        <Route path="/carrito" component={Carrito} />
        </Routes>
    </Router>
  );
}
export default App;


