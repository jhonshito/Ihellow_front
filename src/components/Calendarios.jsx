import React, { useState } from 'react'
//import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../styles/calendario.css"
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';


registerLocale('es', es);
setDefaultLocale('es');

const Calendarios = () => {

    //estado de la fecha actual
    //const [fecha, setFecha] = useState(new Date());
    const [fechaInicial, setFechaInicial] = useState(new Date());
    const [fechaFinal, setFechaFinal] = useState(new Date());

    console.log(fechaInicial);
    console.log(fechaFinal);

  return (
    <section className='content_calendario'>
        <div className="content_inicial">
            <div className="content_text_inicial">
                <i className="bi bi-calendar-plus-fill"></i>
                <p>Fecha inicial</p>
            </div>
            <DatePicker
                selected={fechaInicial} 
                dateFormat="dd/MM/yyyy"     
                onChange={setFechaInicial} 
                className='fechas'
                popperModifiers={{
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false,
                      boundariesElement: 'viewport',
                    },
                    offset: {
                      enabled: true,
                      offset: '0px, 10px',
                    },
                }}
            />
        </div>
        <div className="content_final">
            <div className="content_text_inicial">
                <i className="bi bi-calendar-plus-fill"></i>
                <p>Fecha final</p>
            </div>
            <DatePicker 
                selected={fechaFinal} 
                dateFormat="dd/MM/yyyy" 
                onChange={setFechaFinal} 
                className='fechas' 
            />
        </div>
    </section>
  )
}

export default Calendarios
