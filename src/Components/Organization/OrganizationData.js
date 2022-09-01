import React,  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiPrivate from '../../Services/privateApiService';
import "./OrganizationData.css"

function OrganizationData(){

    const [initialValues, setInitialValues] = useState({});

    const splitString = (data) =>{        
        const dataSize = data.length;
        let subData = data.substring(3, dataSize-4);
    
        return subData;       
    }
    
    useEffect(() =>{
        const getData = async () =>{
            let orgData = await apiPrivate.Get(`organization`);
            setInitialValues({...initialValues,
                                id: orgData.id, 
                                name: orgData.name, 
                                logo: orgData.logo, 
                                short_description: splitString(orgData.short_description)                                
                            });
                           
        }        
        getData();
    }, []);

    
    
    return(
        <div className="container">            
            
            <div className="left">
                <h1>{ initialValues.name }</h1>
                <p> { initialValues.short_description }</p>
                <Link to={`/backoffice/organization/edit?id=${initialValues.id}`} className="submit-btn">Editar</Link>
            </div>            
            <div className="right">
                <img src={initialValues.logo}></img>
            </div>
            
        </div>
    )
}

export default OrganizationData;