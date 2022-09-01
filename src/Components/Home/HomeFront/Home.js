import React, {useState, useEffect} from 'react';
import publicApi from '../../../Services/publicApiService'
import { Link } from 'react-router-dom';
import './Home.css'





const Home = () => {

    const [welcomeHi, setWelcomeHi] = useState({})


    const resData = async () =>{
        const endpoint = 'organization'
        let homeOrganization = await publicApi.Get(endpoint)   
        console.log(homeOrganization)     
        setWelcomeHi(homeOrganization)
    }

    useEffect(() => {
      resData()
    }, [])


    console.log(welcomeHi)
    


  return (
   <div>
        <div className='home-front-container'>
           
            <div className='home-front-left'>
               <h2 className='home-front-p'>Hola! {welcomeHi.welcome_text}</h2>
                  <p className='home-front-p'>{welcomeHi.long_description}</p> 
                 <Link to="/contact">
                     <button className='home-front-button'>Contactanos</button>                  
                 </Link>
            </div>       

            <div className='home-front-rigth'>
              <img src={welcomeHi.logo} alt=".." />
            
            </div>      
        
        </div>


      
   </div>
   
  )
}

export default Home