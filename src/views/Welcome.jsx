import React, { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Header2 from '../components/Header2';

function Welcome() {

  const [name, setName] = useState({}); // user
  
  const [anuncios, setAnuncios] = useState([]); // anuncios
  const navigate = useNavigate();

  const {_id} = useParams();

  const handleUpdateClick = () => {
    navigate(`/form/${_id}`);
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${_id}`)
    .then(({data}) => setName(data.nombre))
    .catch((error) => console.error(error))
  }, [_id]); //el useEffect se ejecuta cada vez que cambia el valor de '_id'

  useEffect(() => {
    // Fetch anuncios desde el server
    axios.get(`http://localhost:3000/anuncio/${_id}`)
     .then(res => setAnuncios(res.data))
     .catch((error) => console.error(error));
   }, []);

   console.log('anuncios', anuncios);

  return (
    <>
    <Header2/> 

    <div className='welcome__div'>
      <h3 className='welcome__h3'>{name? `Bienvenido ${name}!` : 'Login Error' }</h3>
      <h2 className='welcome__h2'>{name? `${name} : esta es tu area personal de usuario!` : ''  }</h2>

        <div className='welcome__divCard'>
          <p className='divCard__user'>{`${name}`}</p>
          
        {anuncios.map((element) => {
          return(
          <div className='divCard__content'>
          <p key={element._id} className='divCard__content__title'>{element.title}</p>
          <p key={element._id} className='divCard__content__description'>{element.description}</p>

          <div className='div__divCard__button'>
          <button type='button' className='divCard__button'>Contacta con {`${name}`} </button>
          <button type="button" className='divCard__button' onClick={handleUpdateClick}>Update</button>
          <button type="button" className='divCard__button'>Delete</button>
          </div>
          </div>
         )})}
  
        </div>

      <div>    
      </div>   
    </div>
 </>
  )
}


export default Welcome
