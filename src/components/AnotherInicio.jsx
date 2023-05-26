import React from 'react'
import { Outlet } from "react-router-dom";
import "../styles/anotherInicio.css"
import Calendarios from './Calendarios';
import Encabezado from './Encabezado';

const AnotherInicio = () => {
  return (
    <div className='content_anotherInicio'>
      <Encabezado />
      <Calendarios />
      <Outlet />
    </div>
  )
}

export default AnotherInicio
