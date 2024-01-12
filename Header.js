import React from 'react'
import logo from './logo.jpg'
import './Header.css';
import Tabs from './Tabs';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className='Header'>
      <div className='Header1'>
      <div className='logo'>
     <img className='slo'src={logo} alt='Logo'/>
      </div>
      <div className='Navs'>
      <NavLink to={'/newspdf'}>News PDF</NavLink>
      <NavLink to={'/'}>Home</NavLink>
      </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default Header