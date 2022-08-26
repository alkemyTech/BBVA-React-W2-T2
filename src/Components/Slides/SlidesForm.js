import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService'; 
import '../FormStyles.css';

function SlidesForm (props) {

   /*const props = {
        id: 1411,
        name: "Juntos somos más",
      description: "<p>Sé parte de nuestra comunidad y cambiemos el mundo.</p>",
      image: "http://ongapi.alkemy.org/storage/2sjocle1Nz.png",
      order: 1
      
    }*/
    
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',         
        image: ''        
    })               
    
    if(props.name){
        setInitialValues({...initialValues, name: props.name, description: props.description, image: props.image}) 
                
    }
    
    
    const validateExtension = (image_src) =>{
        const allowedExtensions = /(.jpg|.png)/;

        return allowedExtensions.test(image_src);
    }

    const handleChange = (e) => {        
        
        switch (e.target.name) {
            case 'name':                
                if(e.target.value.lenght < 4){
                    alert("La longitud no puede ser inferior a 4 caracteres");
                }else{
                    setInitialValues({...initialValues, name: e.target.value});
                }
                break;
            case 'description':
                if(e.target.value === ''){
                    alert("Debe incluir una descripcion");
                }else{
                    setInitialValues({...initialValues, description: e.target.value});
                }
                break;
            case 'image':
                if(validateExtension(e.target.value)){
                    setInitialValues({...initialValues, image: e.target.value});
                }else{
                    alert("Formato de imagen invalido!");
                }                
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();        
        let id = props.id;
       
        if(id){            
            apiPrivate.Put(`slides/${id}`, initialValues);
        }else{
            
            apiPrivate.Post('slides', initialValues);
        }
          
        console.log(initialValues);
    }
    
    

    return (
        <form className="form-container" onSubmit={ handleSubmit }>
            <div><span>Order: { initialValues.order }</span></div> <br />
            
            <input className="input-field" type="text" required name="name" value={ initialValues.name } onChange={ handleChange } placeholder="Titulo"></input>
            
            <div >
                <CKEditor 
                    editor={ ClassicEditor }
                    data={ initialValues.description }
                    name="description"
                                        
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                         initialValues.description = ((statePrev) => ({...statePrev, description:data}));                        
                    }}
                />
           </div>            
            
            <input type="file" required name="image" value={ initialValues.image } onChange={ handleChange }></input>            
                       
            <button className="submit-btn" type="submit">Enviar</button>

            <img scr={ initialValues.image } className="myImg" alt="imagen" />
        </form>
    );
}
 
export default SlidesForm;