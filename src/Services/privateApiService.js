import axios from 'axios';

const config = {
    headers: {
        Group: 54321                //Aqui va el ID del equipo!!
    }
}
const apiUrl = "https://ongapi.alkemy.org/api";
const Delete = async (url) =>{

    let urlFinal = apiUrl + url

    try {
        return await axios.delete(urlFinal, config);
    } catch (error) {
        return error
    }

}

const Put = (url, body) =>{

     let urlFinal = apiUrl + url;
    
        axios.put(urlFinal, body, config)
            .then(response => console.log(response))
            .catch(error => console.log(error)); 
        
}
const Post = (url, body) =>{
    let urlFin = apiUrl + url;
    axios
    .get(urlFin, config, body)
    .then(res => console.log(res))
    .catch(err => console.log(err));
 }

export default {Put, Delete, Post}
