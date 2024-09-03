import React from 'react'
import Header2 from '../components/Header2'

function HomePage() {
  return (
    <>

    <Header2/>
    

    <div className='home__div'>
        <h3 className='home__titulo'>Bienvenido a la Home Page!</h3>
        <h6 className='home__subtitulo'> Descubre las últimas actualizaciones </h6>
        <p> Import: API con anuncios de otros usuarios tipo social-network-home </p>
        <p> Petición GET - READ </p>
      
    </div>
    </>
  )
}

export default HomePage
