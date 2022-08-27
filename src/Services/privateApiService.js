import axios from "axios";
import getHeaderAuthorization from './getToken'

const config = {
  headers: getHeaderAuthorization()
  
};


const apiUrl = "https://ongapi.alkemy.org/api/";

const Get = async (url) => {
  let urlFinal = apiUrl + url;

  return await axios
    .get(urlFinal, config)
    .then((res) => res.data.data)
    .catch((err) => err);
};

const Delete = async (url) => {
  let urlFinal = apiUrl + url;

  try {
    return await axios.delete(urlFinal, config);
  } catch (error) {
    return error;
  }
};

const Put = async (url, body) => {
  let urlFinal = apiUrl + url;

  return await axios
    .put(urlFinal, body, config)
    .then((response) => response.data)
    .catch((error) => error);
};

const Post = async (url, body) => {
  let urlFinal = apiUrl + url;
  return await axios
    .post(urlFinal, body, config)
    .then((res) => res.data)
    .catch((err) => err);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { Get, Put, Delete, Post };
