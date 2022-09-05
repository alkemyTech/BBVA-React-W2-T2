import React, { useState, useEffect } from "react";
import apiPublic from '../../../Services/publicApiService';
import Carousel from "react-bootstrap/Carousel"
import './HomeSlider.css'

//import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

const HomeSlider = () => {

    const [initialValues, setInitialValues] = useState({
        image: '',
        name: '',
        description:''
    });

    const [sliderFrom, setSliderFrom] = useState([]);



    const responseData = async() => {
        const endPoint = 'slides';
        let response = await apiPublic.Get(endPoint);
        console.log(response)
        setSliderFrom(response);
        
    }; 

    useEffect (() => {
        responseData();
    }, []) 
    
    console.log(initialValues);
   

    return(

        <div className="slide">
            <div className="images">
                <Carousel>
                    {sliderFrom.map((diferentSlides) => (
                        <Carousel.Item>
                            <img className="d-block" src={diferentSlides.image} alt="First slide" height="350px" />
                            <h2 className="font-name">{diferentSlides.name}</h2>
                            <h3 className="font-description">{diferentSlides.description}</h3>
                        </Carousel.Item>
                    ) )}
                    
                </Carousel>
            </div>
        </div>

       
    )

}

export default HomeSlider;