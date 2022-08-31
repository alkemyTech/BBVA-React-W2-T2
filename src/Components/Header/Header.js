import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {

 let token = localStorage.getItem('token')




  return (
      <>
      <header className="header-container">
      <div className="container-logo">
      <div className="logo-header">
        <div className="container-figures">
          <div className="triangle-logo"></div>
          <div className="square-logo"></div>
          <div className="circle-logo"></div>
        </div>
        <div className="name-logo">Somos mas</div>
      </div>
      </div>
      <div className="container-list">
        <ul className='list-container'>
          <li className='list-container'><Link to='/'  className='link-public'>Inicio</Link></li>
          <li className='list-container'><Link to='/us' className='link-public'>Nosotros</Link></li>
          <li className='list-container'><Link to='/news' className='link-public'>Novedades</Link></li>
          <li className='list-container'><Link to='/testimonials' className='link-public'>Testimonios</Link></li>     
          <li className='list-container'><Link to='/contact' className='link-public'>Contactos</Link></li>          
          <li className='list-container'><Link to='/donar' className='link-public'>Contribuye</Link></li>
          <li className='list-container'><Link to='/activities' className='link-public'>Actividades</Link></li>
        </ul>
      </div> 
       { !token &&
        <div className="container-buttons">
        <Link to='/login'><button className="button-login" type="submit">Log in</button></Link>
        <Link to='/register-form'><button className="button-register" type="submit">Registrate</button></Link>
        </div> 
       }
     

  </header>
      
      
      
      
      </>


  )
}

export default Header