// -------------- LOGIN

import React from 'react'
import { useState } from 'react'
import Header from '../components/Header2';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import bcrypt from 'bcryptjs' 

function Login() {

  <Header />
  const { VITE_LOGIN } = import.meta.env
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    correo: '',
    password: ''
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const {correo, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  };
  const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if(password !== '' && correo !== ''){
      const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u');
      // console.log(password);
      // console.log(hashedPassword);
      const User = { 
        correo, 
        hashedPassword
      };
      
      setLoading(true)
      await axios.post(`${VITE_LOGIN}`, User)
      .then(({data}) => {
        console.log(data)
        console.log(User)
      setMensaje(data.mensaje)
    setInputs({correo: '', password: ''})
    setTimeout(() => {
      if (data?.user._id === 'NOTFOUND') {
        localStorage.removeItem('user');
        localStorage.removeItem('_id');
        navigate(`/LoginError/${data?.user._id}?msg=${data.mensaje}`) 
      } else {
        setMensaje('');
        console.log('salvo in localstorage ', data.user.nombre);
        localStorage.setItem('user', data.user.nombre);
        localStorage.setItem('_id', data.user._id);
        navigate(`/welcome/${data?.user._id}`) 
      }
      //navigate to /welcome/:userId; uso un if ternario: si hay datos, cojo la _id del user en Mongo
    }, 2000)
  })
  .catch((error) => {console.log(error)
  setMensaje('Error')})

  setLoading(false);
  }}

  return (
    <div className='register__div'>
      <h3 className='register__h3'>Tienes ya una cuenta?</h3>
      <h2 className='register__h2'>Login:</h2>

      <form action="" method='POST' className='register__form' onSubmit={onSubmit}>

        <label htmlFor="correo" className='register__formLabel'>Correo: </label>
        <input type="email" id='correo' name='correo' placeholder='Correo...' value={correo} className='register__formInput' onChange={onChange}/>

        <label htmlFor="password" className='register__formLabel'>Password: </label>
        <input type="password" id='password' name='password' placeholder='Password...' value={password} className='register__formInput' onChange={onChange}/>

        <button type="submit" className='register__formButton'>{loading? 'Cargando...' : 'Login! '} </button>
        <br/>
        <p className='register__p'>No tienes una cuenta?</p>
        <b onClick={()=> {navigate('/')}} className='register__iniciaSesion'>Registrate!</b>
      </form>
      
    </div>
  )

  // const [user, setUser] = useState({});

  // const [error, setError] = useState(''); 

  // function inicioSesion (e) {

  //   e.preventDefault()
  //   // añadir try-catch al fetch
    
  //   const {VITE_USERS} = import.meta.env;

  //   const controller = new AbortController();

  //   let options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   }

  //   fetch (VITE_USERS, options)
  //   .then (res => res.json()) 
  //   .then (data => {
  //     if (data.status === 'failed'){
  //       setError (data.error + 'Usuario o contraseña incorrecta')
  //     } else {
  //       setError('Iniciando sesión correctamente ...');
  //       localStorage.setItem('user', data.nombre)

  //     //   setTimeout (() => {
  //     //     window.location.replace ('/home') 
  //     //  }, 1000)
  //     }
  //   })
  //   .catch (error => console.log(error))
  //   .finally (() => {controller.abort()}); 
  //   console.log(VITE_USERS);
  // }

  // function changeInput (e) {
  //   let nombre = e.target.name;
  //   let valor = e.target.value;

  //   setUser({...user, [nombre]:valor});

  // }

  // return (
  //   <>
  //   <form action="#" method="POST" onSubmit={inicioSesion} className='login__form'>

  //       <label htmlFor="nom" className='login__formLabel'>Nombre: </label>
  //       <input type="text" name="nombre" id="nom" value = {setUser.nombre} onChange={changeInput} className='login__formInput' /> <br/>

  //       <label htmlFor="pass" className='login__formLabel'>Contraseña: </label>
  //       <input type="password" name="password" id="pass" value = {setUser.password} onChange={changeInput} className='login__formInput'/> <br/>

  //       <input type="submit" value="Enviar" className='login__formSubmit'/>

  //       {/* --------------- IF TERNARIO */} 

  //       {error != ''? <p>{error}</p> : <></>}
  //   </form>
  //   </>
  // )
}

export default Login
