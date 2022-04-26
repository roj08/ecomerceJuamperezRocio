import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  
  return (
    <header className="header">
      
      <div className="logo-container">
        
      </div>

      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Tazas</a>
          </li>
          <li>
            <a href="/">Agendas y cuadernos</a>
          </li>
          <li>
            <a href="/">Otros productos</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;