import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AvisoLegal from './pages/Legal/AvisoLegal.jsx';
import Privacidad from './pages/Legal/Privacidad.jsx';
import CookiePopup from './pages/Legal/CookiePopup.jsx'; // ✅ Importación corregida
import Cookies from './pages/Legal/Cookies.jsx';


function App() {
    return (
        <>
            {/* Pantalla de carga */}


            <Router>
                <CookiePopup /> {/* ✅ Se muestra el popup en todas las páginas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aviso-legal" element={<AvisoLegal />} />
                    <Route path="/politica-de-privacidad" element={<Privacidad />} />
                    <Route path="/politica-de-cookies" element={<Cookies />} /> {/* ✅ Nueva ruta */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
