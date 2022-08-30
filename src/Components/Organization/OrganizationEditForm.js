import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService'; 
import '../FormStyles.css';
import validator from 'validator';
import swAlert from 'sweetalert'

function OrganizationEditForm(){

    const [initialValues, setInitialValues] = useState({});    
    const [errors, setErrors] = useState({});
    //let { id } = useParams();
    let id = 1; // hardcodeado para practica
    
    useEffect(() =>{
        const getData = async () =>{
            let orgData = await apiPrivate.Get(`organization/${id}`);
            setInitialValues({...initialValues, 
                                name: orgData.name, 
                                logo: orgData.logo, 
                                short_description: orgData.short_description,
                                long_description: orgData.long_description,                            
                                facebook_url: orgData.facebook_url,
                                linkedin_url: orgData.linkedin_url,
                                instagram_url: orgData.instagram_url,
                                twitter_url: orgData.twitter_url
                            });
        }
        getData();
    }, []);
    
    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'logo_file'){
            setInitialValues({...initialValues, logo: e.target.value})
        } if(e.target.name === 'logo'){
            setInitialValues({...initialValues, logo: e.target.value})
        } if(e.target.name === 'facebook_url'){
            setInitialValues({...initialValues, facebook_url: e.target.value})
        } if(e.target.name === 'linkedin_url'){
            setInitialValues({...initialValues, linkedin_url: e.target.value})
        } if(e.target.name === 'instagram_url'){
            setInitialValues({...initialValues, instagram_url: e.target.value})
        } if(e.target.name === 'twitter_url'){
            setInitialValues({...initialValues, twitter_url: e.target.value})
        }
    }

    const validateExtension = (logo_src)=>{
        const allowedExtensions = /(.jpg)|(.png)/;

        return allowedExtensions.exec(logo_src);
    }

    const validateURL = (url_value) => {
        return validator.isURL(url_value);
    }

    const validateFields = () => {
        if(initialValues.name === ''){
            setErrors({...errors, name:"El campo 'Nombre' no puede estar vacio"});
            return false;
        }else{
            errors.name = " "; // No funciona el setErrors, por eso lo asigno con el operador =               
        }        
        
        if(initialValues.logo === ''){
            setErrors({...errors, logo: "Debe incluir una imagen para el logo"});
            return false;
        }else if(!validateExtension(initialValues.logo)){
            setErrors({...errors, logo: "Formato de imagen NO valido"})
            return false;
        }else{errors.logo =''} 
        
        if(initialValues.short_description === ''){
            setErrors({...errors, short_description:"Debe incluir una pequeña descripcion"});
            return false;            
        }else{errors.short_description = ''}         
        
        if(initialValues.long_description === ''){
            setErrors({...errors, long_description:"Debe incluir una descripcion"});
            return false;            
        }else{errors.long_description = ''} 
        
        if(!validateURL(initialValues.facebook_url) ){            
            setErrors({...errors, facebook_url:"URL de Facebook no valida"});
            return false;            
        }else{errors.facebook_url = ''} 
       
        if(!validateURL(initialValues.linkedin_url)){
            setErrors({...errors, linkedin_url:"URL de Linkedin no valida"});
            return false;            
        }else{errors.linkedin_url = ''} 
        
        if(!validateURL(initialValues.instagram_url)){
            setErrors({...errors, instagram_url:"URL de Instagram no valida"});
            return false;            
        }else{errors.instagram_url = ''} 
        
        if(!validateURL(initialValues.twitter_url)){
            setErrors({...errors, twitter_url:"URL de Twitter no valida"});
            return false;            
        }else{errors.twitter_url = ''} 
       
        return true;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validateFields()){                       
                apiPrivate.Put(`organization/${id}`, initialValues);
                console.log("Formulario editado");                
                swAlert("¡Formulario editado exitosamente!", "");                 
                console.log(initialValues);
        }                   
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-title">
                <h3>ACTUALIZACION DE DATOS DE ORGANIZACION</h3>
            </div>
            <label className="label" htmlFor="name">Nombre</label>
            <input className="input-field" type="text" name="name" value={ initialValues.name } onChange={handleChange} placeholder="Nombre"></input>
            {errors.name && <div> <p className="error">{ errors.name }</p> </div> }
            
            <label className="label" htmlFor="name">Logo</label>
            <input type="file" accept="image/png, image/jpeg" name="logo_file" value="" onChange={ handleChange }></input>            
            <input type="text" className="input-field" name="logo" value={ initialValues.logo } onChange={ handleChange } placeholder="imagen logo"></input>
            {errors.logo && <div> <p className="error">{ errors.logo }</p> </div> }

            <label className="label" htmlFor="name">Resumen</label>
            <div >
                <CKEditor 
                    editor={ ClassicEditor }
                    data={ initialValues.short_description }
                    name="short_description"
                                       
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                         setInitialValues((statePrev) => ({...statePrev, short_description:data}));                        
                    }}
                />
                {errors.short_description && <p className="error">{ errors.short_description }</p> }
           </div>

           <label className="label" htmlFor="name">Descripcion</label>
           <div >
                <CKEditor 
                    editor={ ClassicEditor }
                    data={ initialValues.long_description }
                    name="long_description"
                                       
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                         setInitialValues((statePrev) => ({...statePrev, long_description:data}));                        
                    }}
                />
                {errors.long_description && <p className="error">{ errors.long_description }</p> }
           </div>
           
           <label className="label" htmlFor="name">Redes Sociales</label>

           <input className="input-field" type="text" name="facebook_url" value={initialValues.facebook_url} onChange={handleChange} placeholder="www.facebook.com"></input>
           {errors.facebook_url && <p className="error">{ errors.facebook_url }</p> }
           
           <input className="input-field" type="text" name="linkedin_url" value={initialValues.linkedin_url} onChange={handleChange} placeholder="www.linkedin.com"></input>
           {errors.linkedin_url && <p className="error">{ errors.linkedin_url }</p> }
           
           <input className="input-field" type="text" name="instagram_url" value={initialValues.instagram_url} onChange={handleChange} placeholder="www.instagram.com"></input>
           {errors.instagram_url && <p className="error">{ errors.instagram_url }</p> }
           
           <input className="input-field" type="text" name="twitter_url" value={initialValues.twitter_url} onChange={handleChange} placeholder="www.twitter.com"></input>
           {errors.twitter_url && <p className="error">{ errors.twitter_url }</p> }
            
            <button className="submit-btn" type="submit">Enviar</button>           
        </form>
    );
}

export default OrganizationEditForm;