import axios from 'axios';

const config = {
    headers: {
        Group: 54321                
    }
}
const apiUrl = "https://ongapi.alkemy.org/api";

const Get = (url) => {
    let urlFinal = apiUrl + url;
    
    axios.get(urlFinal)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
}

const Delete = async (url) =>{

    let urlFinal = apiUrl + url

    try {
        return await axios.delete(urlFinal);
    } catch (error) {
        return error
    }

}

const Put = (url, body) =>{

     let urlFinal = apiUrl + url;
    
        axios.put(urlFinal, body)
            .then(response => console.log(response))
            .catch(error => console.log(error)); 
        
}

const Post = (url, body) =>{
    let urlFinal = apiUrl + url;
    axios.post(urlFinal, body)
    .then(res => console.log(res))
    .catch(err => console.log(err));
 }


// eslint-disable-next-line import/no-anonymous-default-export
export default {Get, Put, Delete, Post}

