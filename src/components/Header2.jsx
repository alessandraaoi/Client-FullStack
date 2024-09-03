import React from 'react'
import { Link, useParams } from "react-router-dom";

import OfreceServicio from '../views/OfreceServicio';

import Explora from '../views/Explora';
import Welcome from '../views/Welcome';

function Header2() {

  return (
    <header className="header2">
      <h1 className="header2__title">COLLABORI-AMO</h1>
      <ul className="header2__list">
        <li className="header2__listItem"><Link to = {'/explora'} element = {<Explora/>} className="header2__link">EXPLORA</Link></li>

        {/* {localStorage.getItem('user')==null?     */}
        {/* <li className="header__listItem"><button className='header__button'><Link to = {'/login'} element = {<Login/>} className="header__link">INICIA SESIÓN</Link></button></li> */}
        
        <li className="header__listItem"><Link to = {'/servicios'} element = {<OfreceServicio/>} className="header__link">OFRECE UN SERVICIO</Link></li>
        <li className="header2__listItem"><button className='header__button'><Link to = {'/welcome/:_id'} element = {<Welcome/>} className="header2__link">BIENVENIDO</Link></button></li>
        
      </ul>
    </header>
  )
}

export default Header2
