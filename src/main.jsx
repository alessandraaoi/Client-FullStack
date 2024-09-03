import React from 'react'

import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Inicio from './views/Inicio'
import Info from './views/Info'

import Login from './views/Login'

import Register from './views/Register'
import Welcome from './views/Welcome'
import LoginError from './views/LoginError'
import Explora from './views/Explora'
import OfreceServicio from './views/OfreceServicio'
import HomePage from './views/HomePage'
import Form from './views/Form'
// import UserArea from './views/UserArea'

import './css/styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>

        <div>
            
            <Routes>
  
            <Route path = '/' element = {<Inicio/>} />
            <Route path = '/info' element = {<Info/>} />

            <Route path = '/login' element = {<Login/>} />
            <Route path = '/register' element = {<Register/>} />
            <Route path = '/welcome/:_id' element = {<Welcome/>} />
            <Route path = '/LoginError/:_id' element = {<LoginError/>} />
            
             <Route path = '/explora' element = {<Explora/>} />
            <Route path = '/servicios' element = { <OfreceServicio/>} />
            <Route path = '/home' element = { <HomePage/>} />

            <Route path="/form/:_id" element={<Form/>} />
            {/* <Route path = '/userarea' element = {localStorage.getItem('user') == null ? <Login/> : <UserArea/>} /> */}

        </Routes>
        
        </div>

    </Router>

)
