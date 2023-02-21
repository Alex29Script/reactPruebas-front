import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './components/Inicio'
import { Nav } from './components/Nav'
import { FormUpdate } from './components/FormUpdate'
import { Buscarguia } from './components/Buscarguia'
import { Input } from './components/Input'
import { Server2 } from './components/Server2'
import { Sever2consulta } from './components/server2Consulta'
import { Padre } from './components/FuncionPadreHijo/Padre'
import { Menu } from './components/comunicacion/menu'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Inicio />}/>
        <Route path="/nav" element={<Nav />}/>
        <Route path="/guia/buscar/"  element={<Buscarguia/>}/>
        <Route path="/input/" element={<Input/>}/>
        <Route path='/server2' element={<Server2/>}/>
        <Route path="/server2/mensajes" element={<Sever2consulta/>}/>
        <Route path="/funcion/PadreHijo" element={<Padre/>}/>
        <Route path="/funcion/Comunicacion/" element={<Menu/>}/>
        

      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
