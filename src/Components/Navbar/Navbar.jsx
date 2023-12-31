import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [menu, changeMenu] = useState('shop');

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
       <Link to="/" style={{textDecoration:"none", fontSize:"30px"}}><b>Shopify</b></Link> 
      </div>

      <ul className="nav-menu">
        {/* onClick function and ternary operator for hr */}
        <li onClick={() => changeMenu('shop')}> 
          <Link style={{ textDecoration: 'none' }} to="/Shop">
            Shop
          </Link>{' '}
          {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => changeMenu('mens')}>
          <Link style={{ textDecoration: 'none' }} to="/mens">
            Men
          </Link>{' '}
          {menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => changeMenu('women')}>
          <Link style={{ textDecoration: 'none' }} to="/women">
            Women
          </Link>{' '}
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li onClick={() => changeMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>{' '}
          {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
