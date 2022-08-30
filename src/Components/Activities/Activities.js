// import axios from 'axios';
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import apiPrivate from "../../Services/privateApiService";
import "./Activities.css";

function Activities() {
    const [setInitialValues] = useState({
      name: "",
      description: "",
      image: "",
    });

    const resData = async () => {
      const endPoint = "activities";
      let activitiesList = await apiPrivate.Get(endPoint);
      setInitialValues(activitiesList);
      console.log(activitiesList);
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
        <h2>Nuestro trabajo</h2>
        <div class='paragraph'></div>
        <p>El rol de las Organizaciones No Gubernamentales (ONG) para la protección de los derechos humanos en el campo de las relaciones internacionales y su acción en las Naciones Unidas. En principio cabe definir a las ONGs que trabajan para proteger los derechos humanos como todo nucleamiento de personas que se dan cita y se organizan para un fin público (defensa de los derechos de la mujer, los niños, los trabajadores, la lucha contra la discriminación racial, étnica o socio-económica, o por promover las libertades fundamentales y combatir los flagelos de la tortura, la esclavitud, la guerra, etc.)</p>
      </div>
    </>
  );
}

export default Activities;
