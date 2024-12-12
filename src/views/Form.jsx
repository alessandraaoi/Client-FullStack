
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header2 from '../components/Header2';

const Form = () => {

  //Obtener el ID del anuncio desde los parámetros de la URL
  const {id }= useParams();
  const {_id} = useParams();

  // const {state} = useLocation()
  // const {title, description} = state;
 
  const [anuncio, setAnuncio] = useState([])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

    // Obtener los datos del anuncio cuando el componente se monta
    useEffect(() => {
      const fetchAnuncio = async () => {
        try {
          const respuesta = await axios.get(`http://localhost:3000/anuncio/${id}`);
          console.log('form id axios.get:', id)
          // leggendo la console vediamo come _id si riferisce a userid --> ERROR --> _id deve corrispondere a _id 

          setTitle(respuesta.data.title || ''); // Establecer el título en el estado
          setDescription(respuesta.data.description || ''); // Establecer la descripción en el estado
        } catch (error) {
          console.error('Error al obtener el anuncio:', error);
        }
      };
      fetchAnuncio();
    }, [id]);


  // Manejo de la actualización del anuncio

  const handleActualizar = async (e) => {
    e.preventDefault();
    try {
      const datosActualizados = { title, description };

      console.log('URL para actualizar:', `http://localhost:3000/anuncio/${id}`);
      console.log('Datos para actualizar:', { title, description });
      
      console.log(`URL para actualizar: http://localhost:3000/anuncio/${id}`);


      // Petición PUT para actualizar el anuncio con los nuevos datos
      const response = await axios.put(`http://localhost:3000/anuncio/${id}`, datosActualizados); 
      console.log('Anuncio actualizado:', response.data);
      navigate(`/welcome/${_id}`); // Redirigir al usuario después de la actualización
    } catch (error) {
      console.log(error);
      console.error('Error al actualizar el anuncio:', error);
    }

  };
  return (
  <>
  
    <Header2/>
    
    <div>
        
    <h2>Actualizar Anuncio</h2>

    {/* El form HTML envia datos al servidor con una petición POST */}
    <form onSubmit={handleActualizar}> 

 <label htmlFor="title">
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Titulo'}/>
  </label>
        <label htmlFor="description">
           <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Descripción'}/>
        </label> 
    
    <button type='submit'>Actualizar</button>
    </form>
      
    </div>
    </>
  )
}

export default Form
