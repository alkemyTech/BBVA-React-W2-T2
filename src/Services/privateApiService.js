import axios from 'axios';



const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const apiUrl = "https://ongapi.alkemy.org/api";
let url = "";

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))    
    .catch(err => console.log(err))
}

const Delete = async (apiUrl) =>{

    try {
        const response = await axios.delete(apiUrl, url, config);
        return response;
    } catch (error) {
        return error
    }

}

export default { Get, Delete}