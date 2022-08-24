import React, { useEffect, useState } from 'react'
import apiPublica from "../../Services/publicApiService";
import './About.css'
import Image from "./login.png"

const About = () => {

    const [ about, setAbout] = useState();

    const responseData = async() => {
        const endPoint = 'organization'
        await  apiPublica.Get(endPoint)
        .then( (res) =>{       
             setAbout(res.data.data.long_description)
        }) 
    }

    useEffect(() => {
        responseData()
    }, [])


    console.log(about)
    

  return (
    <>
    <h1 className="about-title">Nosotros</h1>
    <div className="container-about">
            <div className="main-text">                   
                  <div className="about-text">{about}</div>
            </div>            
           <div className="container-image-about">
                <img src={Image} className="about-img"/>
           </div>
     </div>    
    </>
  )
}

export default About