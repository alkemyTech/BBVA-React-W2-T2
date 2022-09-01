import React, {useEffect,useState  } from "react";
import { Link } from "react-router-dom";
import publicApi from '../../../Services/publicApiService'
import './CardNews.css'


const CardNews = () => {

    const [homeNews, setHomeNews] = useState([])
  


    const resData = async () =>{
        const endpoint = 'news'
        let homeNews = await publicApi.Get(endpoint)        
        setHomeNews(homeNews)
        
    }

    useEffect(() => {
      resData()
    }, [])


    console.log(homeNews)

  return (
    <>
    <div className='button-to-run-space testimonial-user'>
        <h3 className='title-button-to-run-space'>Novedades</h3>
            <Link
                className='link-button-to-run-space'
                to="/news">
                Ver todos {`>`}
            </Link>
        </div>
    <div className='home-container-news'>
       {homeNews.slice(4,6).map(( homeNewsUser) =>(
       <div className="home-news-container">
        <div className='home-news-left'>
            <img src={homeNewsUser.image} alt="..."  />       
        </div>
        <div className='home-news-rigth'>
            <p>{homeNewsUser.content.substring(0, 120)}</p>
            <Link type="button"  className="home-news-button"  to={"/news/" + homeNewsUser.id}>Ver Novedades</Link>                   
        </div>       
       </div>
       ))

       }     
    </div>

</>

  )
}

export default CardNews