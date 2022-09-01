import React, {useEffect,useState  } from "react";
import { Link } from "react-router-dom";
import './CardTestimonial.css'
import publicApi from '../../../Services/publicApiService'

const CardTestimonial = () => {

    const [homeTestimonial, setHomeTestimonial] = useState([])
  


    const resData = async () =>{
        const endpoint = 'testimonials'
        let homeTestimonial = await publicApi.Get(endpoint)        
        setHomeTestimonial(homeTestimonial)
        
    }

    useEffect(() => {
      resData()
    }, [])


    console.log(homeTestimonial)



  return (
    <>
    <div className='button-to-run-space testimonial-user'>
    <h3 className='title-button-to-run-space'>Testimonios</h3>
  <Link
      className='link-button-to-run-space'
      to="/testimonials">
      Ver todos {`>`}
  </Link>
</div>
    <div className="container-testimonial">
    {homeTestimonial.slice(1, 5).map((testimonialUser) => (
      <div className="card-testimonial">          
        <div className="user-testimonial">
          <img src={testimonialUser.image} />
          <div className="user-info-testimonial">
            <h5>{testimonialUser.name}</h5>
            <p>{testimonialUser.description}</p>
          </div>
        </div>      
    </div> 



    ))

    }
     
    </div>
    </>
    
  )
}

export default CardTestimonial