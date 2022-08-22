import axios from 'axios';

const config = {
    headers: {
        Group: 54321           //Aqui va el ID del equipo!!
    }
}
const apiUrl = "https://ongapi.alkemy.org/api/";

function Get() {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

const Post = (url, body) =>{
    let urlFin = apiUrl + url;
    axios
    .get(urlFin, config, body)
    .then(res => console.log(res))
    .catch(err => console.log(err));

};
// eslint-disable-next-line import/no-anonymous-default-export
export default {Get, Post};