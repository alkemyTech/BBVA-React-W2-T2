import React, { useEffect, useState } from 'react'
import apiPublica from "../../Services/publicApiService";
import './About.css'
import Image from "./login.png"

const About = () => {

    const [homeMembers, setHomeMembers] = useState([])
    const [ about, setAbout] = useState();

    const responseData = async() => {
        const endPoint = 'organization'
       let data = await  apiPublica.Get(endPoint)
             setAbout(data.long_description)
        }

    const resData = async () =>{
          const endpoint = 'members'
          let homeMembers = await apiPublica.Get(endpoint)        
          setHomeMembers(homeMembers)          
      }

    useEffect(() => {
        responseData()
        resData()
    }, [])


   
    

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
     <div className="cards-list-us"> 
     {homeMembers.map((membersArray, index) => (
     <div className="card 1" key={index}>
          <div className="card_image"> 
           <img src={membersArray.image} /> 
          </div>
         <div className="card_title title-white">
           <p>{membersArray.name}</p>
           <p className="description-members">{membersArray.description}</p>
         </div>
       </div>
     ))}      
        
     </div>  
    </>
  )
}

export default About