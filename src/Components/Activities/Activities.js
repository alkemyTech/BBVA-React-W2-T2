import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import apiPrivate from "../../Services/privateApiService";
import "./Activities.css";
//import parse from "html-react-parser";


function Activities() {
    const [initialValues ,setInitialValues] = useState({
      name: "",
      description: "",
      image: "",
    });

    const resData = async () => {
      const endPoint = "activities";
      let activitiesList = await apiPrivate.Get(endPoint);
      if(activitiesList[0] != null) {
        setInitialValues({name:  activitiesList[0].name, description:  activitiesList[0].description });
      } 
      //console.log(parse("ACTIVITIES"))
      //console.log(parse(initialValues.description))
    };

    useEffect(() => {
       resData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

  return (
    <>
    
      <div class="slide">
        <h2>Actividades</h2>
        <div class="images">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/activities/img1.jpg"
                alt="First slide"
                height="350px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/activities/img2.jpg"
                alt="Second slide"
                height="350px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/activities/img3.png"
                alt="Third slide"
                height="350px"
                />
            </Carousel.Item>
            </Carousel>
        </div>
      </div>
      <div class='text'>
        <div>
        <h2>{initialValues.name}</h2>
        <div class='paragraph'></div>
          <div dangerouslySetInnerHTML={{ __html: initialValues.description }}></div>
          </div>
      </div>
    </>
  );
}

export default Activities;