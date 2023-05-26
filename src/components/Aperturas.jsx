import React, { useEffect, useState } from 'react'
import "../styles/aperturas.css"

import { useAperturasQuery, useClicksQuery } from "../api/apiSplice";

const Aperturas = () => {

  const { data, isLoading, error } = useAperturasQuery();
  const { data: clicksData, isLoading: clicksLoading, error: clicksError } = useClicksQuery();

  const [recargas, setRecargas] = useState([]);


 

  if(error){
    return <div>{error.message}</div>
  }

  if(isLoading || clicksLoading){
    return <div>Loading...</div>
  }

  if(clicksError){
    return <div>{clicksError.message}</div>
  }

  //console.log(recargas.length)
  console.log(clicksData)

  return (
    <div className='content_resumenes'>
      <h2 className='resumen_title'>resumen de las aperturas y los clicks</h2>
      <section className='content_aperturas'>
        <section className='aperturas'>
          <div className="aperturas_text">
            <i className="bi bi-eye-fill"></i>
            <p>Aperturas</p>
          </div>
          <p className='aperturas_numero'>3</p>
        </section>

        <section className='clicks'>
          <div className="clicks_text">
            <i className="bi bi-hand-index-thumb-fill"></i>
            <p>Clicks</p>
          </div>
          <p className='clicks_numero'>{clicksData?.botones || 0}</p>
        </section>
      </section>
    </div>
  )
}

export default Aperturas
