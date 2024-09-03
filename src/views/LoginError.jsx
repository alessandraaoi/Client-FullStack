import React, { useState } from 'react'


import { useSearchParams } from 'react-router-dom';



import Header from '../components/Header';

function LoginError() {
  const [searchParams, setSearchParams] = useSearchParams();


  const msg = searchParams.get('msg');
  console.log(msg);
  console.log(localStorage.getItem('user'));
  return (
    <>
    <Header/> 

    <div className='welcome__div'>
      <h3>Login Error:  {msg}`</h3>


      <div>

      </div>
      
    </div>
    </>
  )
}

export default LoginError
