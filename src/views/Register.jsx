import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

function Register() {
  const [inputs, setInputs] = useState({
    correo: '',
    nombre: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const {correo, nombre, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if(nombre !== '' && password !== '' && correo !== ''){
      const User = {
        nombre, 
        correo, 
        password
      };
      setLoading(true)
      await axios.post('http://localhost:3000/register', User)
      .then(({data}) => {
        console.log(data)
      setMensaje(data.mensaje)
    setInputs({correo: '', password: '', nombre: ''})
    setTimeout(() => {
      setMensaje('');
      navigate('/login') //navigate to /login
    }, 2000)
  })
  .catch((error) => {console.log(error)
  setMensaje('Error')})

  setLoading(false);

  }
  }

  const navigate = useNavigate();

  return (
    <div className='register__div'>
      <h3 className='register__h3'>Bienvenido/a</h3>
      <h2 className='register__h2'>Registrate aquì:</h2>

      <form action="" method='POST' className='register__form' onSubmit={onSubmit}>
        <label htmlFor="nombre" className='register__formLabel'>Nombre: </label>
        <input type="text" id='nombre' name='nombre' placeholder='Nombre...' value={nombre} className='register__formInput' onChange={onChange}/>

        <label htmlFor="correo" className='register__formLabel'>Correo: </label>
        <input type="email" id='correo' name='correo' placeholder='Correo...' value={correo} className='register__formInput' onChange={onChange}/>

        <label htmlFor="password" className='register__formLabel'>Password: </label>
        <input type="password" id='password' name='password' placeholder='Password...' value={password} className='register__formInput' onChange={onChange}/>

        <button type="submit" className='register__formButton'>{loading? 'Cargando...' : 'Iniciar Sesión'} </button>
        <br/>
        <p className='register__p'>Aún no tienes una cuenta?</p>
        <b onClick={()=> {navigate('/register')}} className='register__iniciaSesion'> Inicia Sesión</b>
      </form>
      
    </div>
  )
}

export default Register
