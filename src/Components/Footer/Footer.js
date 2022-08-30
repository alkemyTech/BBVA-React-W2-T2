import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiPublic from '../../Services/publicApiService'
import Imagen1 from './redesSociales/facebook.png'
import Imagen2 from './redesSociales/instagram.png'
import Imagen3 from './redesSociales/linkedin.png'
import Imagen4 from './redesSociales/twitter.png'
import './Footer.css'

const Footer = () => {

    /* const data = [
        {
            id:"001",
            imgFacebook:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/redesSociales%2Ffacebook.png?alt=media&token=74bf04db-9666-4cdd-b6db-7bd50908e813"
        },

        {
            id:"002", 
            imgInstagram:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/redesSociales%2Finstagram.png?alt=media&token=e0b079f0-4fee-497a-8062-a63ce24afdf4"
        },

        {
            id:"003",
            imgLinkedin:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/redesSociales%2Flinkedin.png?alt=media&token=0685c68e-816b-42f4-9380-cdf1ca7649a6"
        },

        {
            id:"004",
            imgTwitter:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/redesSociales%2Ftwitter.png?alt=media&token=4957c2e4-07f5-4dc7-ae0c-85b7a183a12c"
        },

     ]; */

    const [ footerImg, setFooterImg ] = useState()

    const responseData = async() => {        
         //obteniendo las categorias desde el endpoint
         const endPoint = 'organization'
        let organizationSocialMedia =  await apiPublic.Get(endPoint)
        setFooterImg(organizationSocialMedia)
     }


     useEffect(() => {
      responseData()
     }, [])
     





  return (
    <footer className="footer-container">
            <div className='logo-container-footer'>
                <hr className="footer-container-hr"/>
                <div className="logo-container-img">
                    <div className="container-figures">
                        <div className="triangle-logo"></div>
                        <div className="square-logo"></div>
                        <div className="circle-logo"></div>
                    </div>
                    <div className="name-logo">Somos mas</div>
              </div>              
                <hr className="footer-container-hr"/>
            </div>
             <ul className='list-container-footer'>
                <li className='list-container-footer-li'><Link to='/'  className='link-footer-public'>Inicio</Link></li>
                <li className='list-container-footer-li'><Link to='/us' className='link-footer-public'>Nosotros</Link></li>
                <li className='list-container-footer-li'><Link to='/news' className='link-footer-public'>Novedades</Link></li>
                <li className='list-container-footer-li'><Link to='/testimonials' className='link-footer-public'>Testimonios</Link></li>            
                <li className='list-container-footer-li'><Link to='/donar' className='link-footer-public'>Contribuye</Link></li>
                <li className='list-container-footer-li'><Link to='/activities' className='link-footer-public'>Actividades</Link></li>
             </ul>
            <hr className="footer-container-hr"/>
            <div className='socialmedia-container'>
                    <a target="_blank" href={footerImg?.instagram_url} className='socialmedia-container-a' rel="noreferrer">
                        <img src={Imagen2} alt='imagen-instagram' />
                    </a>
                    <a target="_blank" href={footerImg?.facebook_url} className='socialmedia-container-a' rel="noreferrer">
                         <img src={Imagen1} alt='imagen-facebook' />
                    </a>         
                    <a target="_blank" href={footerImg?.twitter_url} className='socialmedia-container-a' rel="noreferrer" >
                         <img src={Imagen4} alt='imagen-twitter' />
                    </a>
                    <a target="_blank" href={footerImg?.linkedin_url} className='socialmedia-container-a' rel="noreferrer"> 
                          <img src={Imagen3} alt='image-linkedin' />
                    </a>
            </div> 
            <div className='copyright-container-footer'>
                <p className='copyright-container-p'>2022 by alkemy. all rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer