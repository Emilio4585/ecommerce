import React, { useState } from 'react';
//import './assets/css/App.css';

function Navbar(){
    const [open, setOpen] = useState(false);
    
            return(
                <div className='Navbar'>
                    <nav>
                        <div className= 'logo'>RedER</div>
                            <ul className='nav-links' 
                            style={{transform: open ? "translateX(0px)" : ""}}
                            >
                                <li><a>Home</a></li>
                                <li><a>Productos</a></li>
                                <li><a>Servicios</a></li>
                                <li><a>Sobre nosotros</a></li>
                                <li><a>Contacto</a></li>
                                <li><a>Registro</a></li>
                                <li><a>Iniciar secion</a></li>
                            </ul>
                            <i onClick={() => setOpen(!open)} className="fas fa-bars barra"></i>
                    </nav>
                </div>
            );
        
}

export default Navbar;