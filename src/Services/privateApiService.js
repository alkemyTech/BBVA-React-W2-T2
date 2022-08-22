import axios from 'axios';



const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const apiUrl = "https://ongapi.alkemy.org/api";




const Delete = async (url, config) =>{

    let urlFinal = apiUrl + url

    try {
        return await axios.delete(urlFinal, config);
    } catch (error) {
        return error
    }

}



export default { Delete}