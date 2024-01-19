import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logotipo from '../../assets/quibblerecords-blanco.svg';
import { Link } from 'react-router-dom';
import { Navbar, NavLink } from 'react-bootstrap';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className='navlinks d-flex'>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll row">Menu
        <div className='menu'>Menu</div>
  
        <div className='col-12 col-lg-2 col-xs-12 col-sm-12'>
          <NavLink className="d-flex align-items-center justify-content-center" as={Link} onClick={() => handleLinkClick('/')} to={'/'}>
            <img className='logotipo col-12' src={Logotipo} alt="Logo" />
          </NavLink>
        </div>
  
        <NavLink as={Link} className={`d-flex align-items-center justify-content-center linked col-12 col-lg-2  ${activeLink === '/' && 'activo'}`} onClick={() => handleLinkClick('/')} to={'/'}>
          Todos los productos
        </NavLink>
  
        <NavLink as={Link} className={`d-flex align-items-center justify-content-center linked col-12 col-lg-2  ${activeLink === '/category/CD' && 'activo'}`} onClick={() => handleLinkClick('/category/CD')} to={'/category/CD'}>
          CD&apos;s
        </NavLink>
  
        <NavLink as={Link} className={`d-flex align-items-center justify-content-center linked col-12 col-lg-2 ${activeLink === '/category/Boxset' && 'activo'}`} onClick={() => handleLinkClick('/category/Boxset')} to={'/category/Boxset'}>
          Boxset&apos;s
        </NavLink>
  
        <NavLink as={Link} className={`d-flex align-items-center justify-content-center linked col-12 col-lg-2 ${activeLink === '/category/DVD' && 'activo'}`} onClick={() => handleLinkClick('/category/DVD')} to={'/category/DVD'}>
          DVD&apos;s
        </NavLink>
  
        <NavLink as={Link} className={`col-12 col-lg-2 mt-0 d-flex justify-content-center`} to={'/cart'} onClick={() => handleLinkClick('/cart')}>
          <CartWidget />
        </NavLink>
  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
