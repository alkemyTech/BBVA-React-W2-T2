import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiPublic from "../../Services/publicApiService";
import Imagen1 from "./redesSociales/facebook.png";
import Imagen2 from "./redesSociales/instagram.png";
import Imagen3 from "./redesSociales/linkedin.png";
import Imagen4 from "./redesSociales/twitter.png";
import "./Footer.css";

const Footer = () => {
  const [footerImg, setFooterImg] = useState({});

  const responseData = async () => {
    //obteniendo las categorias desde el endpoint
    const endPoint = "organization";
    let organizationSocialMedia = await apiPublic.Get(endPoint)
    setFooterImg(organizationSocialMedia);
  };
  console.log(footerImg)
  useEffect(() => {
    responseData();
  }, []);

  return (
    <footer className="footer-container">
      <div className="logo-container-footer">
        <hr className="footer-container-hr" />
        <div className="logo-container-img">
          <div className="container-figures">
            <div className="triangle-logo"></div>
            <div className="square-logo"></div>
            <div className="circle-logo"></div>
          </div>
          <div className="name-logo">Somos mas</div>
        </div>
        <hr className="footer-container-hr" />
      </div>
      <ul className="list-container-footer">
        <li className="list-container-footer-li">
          <Link to="/" className="link-footer-public">
            Inicio
          </Link>
        </li>
        <li className="list-container-footer-li">
          <Link to="/us" className="link-footer-public">
            Nosotros
          </Link>
        </li>
        <li className="list-container-footer-li">
          <Link to="/news" className="link-footer-public">
            Novedades
          </Link>
        </li>
        <li className="list-container-footer-li">
          <Link to="/testimonials" className="link-footer-public">
            Testimonios
          </Link>
        </li>
        <li className="list-container-footer-li">
          <Link to="/donar" className="link-footer-public">
            Contribuye
          </Link>
        </li>
        <li className="list-container-footer-li">
          <Link to="/activities" className="link-footer-public">
            Actividades
          </Link>
        </li>
      </ul>
      <hr className="footer-container-hr" />
      <div className="socialmedia-container">
        <a
          target="_blank"
          href={footerImg.instagram_url}
          className="socialmedia-container-a"
      
        >
          <img src={Imagen2} alt="imagen-instagram" />
        </a>
        <a
          target="_blank"
          href={footerImg.facebook_url}
          className="socialmedia-container-a"
        >
          <img src={Imagen1} alt="imagen-facebook" />
        </a>
        <a
          target="_blank"
          href={footerImg.twitter_url}
          className="socialmedia-container-a"
        >
          <img src={Imagen4} alt="imagen-twitter" />
        </a>
        <a
          target="_blank"
          href={footerImg.linkedin_url}
          className="socialmedia-container-a"
          rel="noreferrer"
        >
          <img src={Imagen3} alt="image-linkedin" />
        </a>
      </div>
      <div className="copyright-container-footer">
        <p className="copyright-container-p">
          2022 by alkemy. all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
