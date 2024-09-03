import React from 'react'
import { Link } from "react-router-dom";
import Explora from '../views/Explora';
import OfreceServicio from '../views/OfreceServicio';
import Login from '../views/Login';


function Header() {
 
  return (
    <header className="header">
      <h1 className="header__title"><Link to = {'/home'} className="header__link">COLLABORI-AMO</Link></h1>
      <ul className="header__list">
        <li className="header__listItem"><Link to = {'/info'} element = {<Explora/>} className="header__link">QUIEN SOMOS</Link></li>
        <li className="header__listItem"><Link to = {'/explora'} element = {<Explora/>} className="header__link">EXPLORA</Link></li>

        
        {/* {localStorage.getItem('user')==null?     */}
        
      
        <li className="header__listItem"><Link to = {'/servicios'} element = {<OfreceServicio/>} className="header__link">OFRECE UN SERVICIO</Link></li>
        <li className="header__listItem"><button className='header__button'><Link to = {'/login'} element = {<Login/>} className="header__link">INICIA SESIÓN</Link></button></li>
      </ul>
    </header>
  );
}
export default Header
