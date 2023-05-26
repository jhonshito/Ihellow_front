import React, { useEffect, useRef } from 'react'
import '../styles/inicio.css'
import logo from "../assets/iHellow-Logo.webp"
import { useLocation, Link, Outlet } from "react-router-dom";

const Inicio = () => {

    //configuracion de react-router-dom
    const location = useLocation();

    //configuracion de unos estados
    const resumen = useRef(null);
    const historial = useRef(null);


    useEffect(() => {
        if(location.pathname == '/inicio/anotherInicio/aperturas'){
            resumen.current.classList.add('select')
        }else {
            resumen.current.classList.remove('select')
        }

        if(location.pathname == '/inicio/anotherInicio/historialYestadisticas'){
            historial.current.classList.add('select')
        }else {
            historial.current.classList.remove('select')
        }

    }, [ location.pathname ]);

  return (
    <>
    <div className="content_barra">
        <div className="content_img">
            <img src={logo} alt="Este es el logo de ihellow" />
        </div>
        <div className="content_enlances">
            <Link to={'/inicio/anotherInicio/aperturas'} className="text_barra" ref={resumen}>
                <i className='bx bxs-notepad'></i>
                <span className='link' >Resumen</span>
            </Link>
            <Link to={'/inicio/anotherInicio/historialYestadisticas'} className="text_barra" ref={historial}>
                <i className='bx bxs-time'></i>
                <span className='link'>estadisticas</span>
            </Link>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Inicio
