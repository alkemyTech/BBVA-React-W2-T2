import axios from 'axios';



const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const apiUrl = "https://ongapi.alkemy.org/api";




const Delete = async (url, config) =>{

    urlFinal = apiUrl + url

    try {
        const response = await axios.delete(urlFinal, config);
        return response;
    } catch (error) {
        return error
    }

}



export default { Delete}