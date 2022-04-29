import React from 'react';
import './styles/NavBar.css';
import logo1 from './styles/img/CositasBonitasLogo.png';
import CartWidget from './CartWidget';

const NavBar = () => {

  return (
    
    <header className="header">

      <div className='header-container'>

        <nav className="nav-container">
          <ul className='nav-container2'>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <img src={logo1} alt="logo" className='logo'/>
        </div>

        <CartWidget />

      </div>
    </header>
  );
};

export default NavBar;