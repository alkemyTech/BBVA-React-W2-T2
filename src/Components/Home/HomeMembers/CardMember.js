import React, {useEffect,useState  } from "react";
import { Link } from "react-router-dom";
import publicApi from '../../../Services/publicApiService'
import './CardHome.css'


 const CardMember = () => {

  const [homeMembers, setHomeMembers] = useState([])
  


    const resData = async () =>{
        const endpoint = 'members'
        let homeMembers = await publicApi.Get(endpoint)        
        setHomeMembers(homeMembers)
        
    }

    useEffect(() => {
      resData()
    }, [])


    console.log(homeMembers)

  return (
    <>
    <div className='button-to-run-space'>
      <h3 className='title-button-to-run-space'>Nuestro Staff</h3>
    <Link
        className='link-button-to-run-space'
        to="/news">
        Ver todos {`>`}
    </Link>
  </div>
     
    <div className="cards-list"> 
    {homeMembers.slice(1, 5).map((membersArray, index) => (
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
 
);
          
} 

export default CardMember
