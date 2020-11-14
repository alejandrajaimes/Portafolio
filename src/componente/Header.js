import React from 'react';
import  "../estilos/header.css";
import { Link } from 'react-router-dom';



const Header = () => {
    return ( 

        <header className="encabezado">
            <div className="titulo">
            <div className="logo">A</div>
             <div className="logo1">j</div>
            </div>

              <nav >
              <Link to="/"> <a href="#" className="nav__link">Home</a></Link>
              <Link to="/Fondo"> <a href="#" className="nav__link">Portafolio</a></Link>
              <Link to="/Informacion"> <a href="#" className="nav__link">Contact</a></Link>
                        
                       
                      
            </nav>
            
        </header>
        
        
     );
}
 
export default Header;