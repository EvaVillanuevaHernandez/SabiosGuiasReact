import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="logos">
        <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
        <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
        <img src="/img/FundaciónLidiaGarcía.jpg" alt="Sabios Guías Intérpretes" />
      </div>
      <footer className='text-white py-4 bg-dark'>
        <nav className='container'>
          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2'>Sabios Guías Intérpretes</li>
            <li className='font-weight-bold mb-2'>828 704 683</li>
            <li className='font-weight-bold mb-2'>633 06 68 95</li>
            <li className='font-weight-bold mb-2'>sabios@fundacionlidiagarcia.org</li>
          </ul>
          
          <div className='text-center mb-0 mt-2'>legal • Política de privacidad • Política de cookies</div>
        </nav>
      </footer>
    </div>
  )
}
export default Footer