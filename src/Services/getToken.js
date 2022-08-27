const getToken =  () =>{
    return localStorage.getItem("token")
}

const getHeaderAuthorization = () =>{
    const token = getToken();

    return token ? {'Authorization': 'Bearer' + token} : {error:'Token no found'}
}

export default getHeaderAuthorization