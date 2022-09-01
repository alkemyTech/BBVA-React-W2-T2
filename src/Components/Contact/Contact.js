import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-container-buttom-up'>
            <h1>¿Queres contribuir?</h1>
            <Link to="/donar">
            <button className='contact-front-button'>Contribuir</button>                  
            </Link>        
        </div>

        <div className='contact-container-form'>
          <h1>¡Contactate con nosotros!</h1>
          <div className='contact-input-front'>
             <input className='input-contact-name' type="text" name="name" placeholder='Nombre y Apellido' />
             <input className='input-contact-email' type="email" name="email" placeholder='Email' /> 
             <textarea className='' name="consulta" rows="4" cols="50" placeholder='Escribe tu consulta'></textarea>        
          </div>
        
        
        </div>

        <div className='contact-container-buttom-down'>               
          <Link to="/donar">
            <button className='contact-front-button-down'>Enviar consulta</button>                  
          </Link>  
        </div>
        <div className="button-front-container">
          <Link to="./" className="button-front-contact">Ir al Inicio</Link>      
        </div>     
    
    </div>
  )
}

export default Contact