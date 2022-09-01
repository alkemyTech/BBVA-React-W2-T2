import React, { useState, useEffect } from "react";
import apiPrivate from '../../../Services/publicApiService';
import './NewsUserView.css';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewsUserView(){

    const [news, setNews] = useState([]);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    
    useEffect(() =>{
        const getData = async () =>{
            let newsData = await apiPrivate.Get(`news`);
            setNews(newsData);
        }
        getData();
    }, [setNews]);
    

    return (
        <>            
            <div className="d-flex flex-column">
                <h2 className="news-page-title title text-center">Novedades</h2>
                <Carousel variant="dark" interval={null} activeIndex={ index } onSelect={ handleSelect }>               
                    { news.map((newsItem, index) => {
                        return(                                    
                                <Carousel.Item key={index}>
                                    <div className="position-relative div-carousel">
                                        <img className="d-block w-100 img-carousel"
                                        src={ newsItem.image }
                                        alt="Slide" />
                                        <Carousel.Caption className="caption">
                                            <h3 className="mb-3 fs-2 title">{ newsItem.name }</h3>
                                            {/*Esto es para formatear el texto a html*/}
                                            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} className="text-start" />
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>                             
                            )
                        })
                    }
                </Carousel>
                <Link to="/" className="button align-self-center">Ir al inicio</Link>                
            </div>
        </>
    )
}

export default NewsUserView;