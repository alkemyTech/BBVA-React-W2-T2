import axios from 'axios';

const config = {
    headers: {
        Group: 54321                
    }
}

const apiUrl = "https://ongapi.alkemy.org/api/";

const Get = (url) => {

    let urlFinal = apiUrl + url;

    axios
        .get(urlFinal, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

const Post = (url, body) =>{
    let urlFinal = apiUrl + url;
    axios
    .get(urlFinal, config, body)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {Get, Post}