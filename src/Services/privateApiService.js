import axios from 'axios';

const api_url = "https://ongapi.alkemy.org/api/";

const config = {
    headers: {
        Group: 54321                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Put = (url, body) =>{

    let final_url = api_url + url;
    
        axios.put(final_url, body)
            .then(response => console.log(response))
            .catch(error => console.log(error));   
        
}

export default {Get, Put}