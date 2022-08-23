import axios from 'axios';

const config = {
    headers: {
        Group: 54321                
    }
}

const apiUrl = "https://ongapi.alkemy.org/api";

const Get = (url) => {

    let urlFinal = apiUrl + url;

    axios
        .get(urlFinal, config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
}

export default Get