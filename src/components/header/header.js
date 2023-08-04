import React from 'react';
import style from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = ({ numberPanier, setShowMenu, showMenu }) => {
  const handleMenuClick = () => {
    setShowMenu(!showMenu); // Inverse l'état du menu déroulant lors du clic sur l'icône
  };

  return (
    <header className={style.header}>
      <NavLink to="/">
        <h2 className={style.h2}>Pc Shop</h2>
      </NavLink>
      <i
        className={`fa-solid fa-bars ${style.btnoption}`}
        onClick={handleMenuClick}
        ></i>
      <NavLink to="/panier" className="btn-header">
        <p>Panier <i className="fa-solid fa-cart-shopping"></i></p>
        {numberPanier > 0 && <div className={style.number}>{numberPanier}</div>}
      </NavLink>
    </header>
  );
};

export default Header;
