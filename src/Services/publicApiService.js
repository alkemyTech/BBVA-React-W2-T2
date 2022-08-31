import axios from 'axios';

const config = {
    headers: {
        Group: 54321                
    }
}

const apiUrl = "https://ongapi.alkemy.org/api/";

const Get = async (url) => {

    let urlFinal = apiUrl + url;

  return await axios.get(urlFinal)
        .then(res => res.data.data)
        .catch(err => err);
}

const Post = async (url, body) =>{
    let urlFinal = apiUrl + url;
    
   return await axios.post(urlFinal, body)
    .then(res => res.data)
    .catch(err => err);
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {Get, Post}