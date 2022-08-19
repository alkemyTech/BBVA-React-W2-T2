import axios from 'axios';

const api_url = "https://ongapi.alkemy.org/api/";
let url = "";

const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Put = (api_url, body) =>{
    
        axios.put(api_url, url, body)
            .then(response => console.log(response))
            .catch(error => console.log(error));   
        
}
          


export default {Get, Put}