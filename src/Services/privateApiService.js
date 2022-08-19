import axios from 'axios';

const config = {
    headers: {
        // Group: 01            //Aqui va el ID del equipo!!
    }
}
const apiUrl= "https://ongapi.alkemy.org/api/";
let url = "+";

function Get() {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

const Post = async (apiUrl, body) =>{
    try{
        const response = await axios.post(apiUrl, url,body)
        return response
    } catch (error) {
        return error
    }
};

export default {Get, Post};
