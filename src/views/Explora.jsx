import React from 'react'
import Header2 from '../components/Header2'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Explora() {

  const [titulo, setTitulo] = useState({})

  const {_id} = useParams();

  useEffect(() => {
    // Fetch anuncios desde el server
    axios.get(`http://localhost:3000/anuncio/${_id}`)
     .then(res => setTitulo(res.data))
     .catch((error) => console.error(error));
   }, []);
  return (

    <>

    <Header2/>
    
    <div className='community__div'>

      <p className='community__p'> Explora </p>

      {/* <p className='community__p'>{`${titulo}`}</p> */}
      
    </div>
    </>
  )
}

export default Explora
