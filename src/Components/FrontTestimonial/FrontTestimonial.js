import React, {useEffect,useState  } from "react";
import { Link } from "react-router-dom";
import publicApi from '../../Services/publicApiService';
import './FrontTestimonial.css';

const FrontTestimonial = () => {
    const [front, setFront] = useState([])
  


    const resData = async () =>{
        const endpoint = 'testimonials'
        let frontTestimonialArray = await publicApi.Get(endpoint)        
        setFront(frontTestimonialArray)
        
    }

    useEffect(() => {
      resData()
    }, [])


    console.log(front)






  return (
    <>
    <div>

            <h2 className="front-testimonials-h2">Testimonios</h2>
            <div className="front-container-testimonial">
            {front.slice(1, 13).map((testimonialUser) => (
            <div className="front-card-testimonial">          
                <div className="user-testimonial">
                <img src={testimonialUser.image} />
                <div className="user-info-testimonial">
                    <h5>{testimonialUser.name}</h5>
                    <p>{testimonialUser.description}</p>
                </div>
                </div>      
            </div> 
            ))}
    
    </div>
    

    </div>
        <div className="button-front-container">
            <Link to="./" className="button-front-testimonials">Ir al Inicio</Link>      
        </div>   
    
    </>
    )
}

export default FrontTestimonial