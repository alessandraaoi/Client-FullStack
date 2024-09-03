// import React from 'react'
// import { useState, useEffect } from 'react'
// import Header2 from '../components/Header2';


// function UserArea() {

//     const [perfil, setPerfil] = useState({});
    
//     const { VITE_USERS } = import.meta.env;

//     useEffect(() => {

//     const controller = new AbortController();

//     let options = {
//       method: 'GET',
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       signal: controller.signal
//     }

//     fetch ( VITE_USERS, options) 
//     .then (res => res.json())
//     .then (data => setPerfil(data))
//     .catch (error => console.log(error))
//     .finally (() => {controller.abort()});
//     console.log( VITE_USERS );
//     }, [])

//   return (
//     <>
//     <Header2/>
//     <div className='div__user'>

//         <div className='userPerfil__div'>
//             <h1>MI PERFIL</h1>

//             <p >{perfil.nombre}</p>
//             <p >{perfil.correo}</p>
            
  

            
//         </div>

//         <div className='userAnuncios__div'>MIS ANUNCIOS</div>
      
//     </div>
//     </>
//   )
// }

// export default UserArea
