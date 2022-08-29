import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService'; 
import '../FormStyles.css';


function SlidesForm () {

    let { id } = useParams();
    //let id = 1413; // para probar la edicion de formulario
    const [formSubmited, setFormSubmited] = useState(false);
    const [errors, setErrors] = useState({});
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',         
        image: '',
        order: '' // es auto-incremental
    })               
    
    useEffect(async () =>{
        let slideData = '';
        
        if(id){ // si llega un id, busca ese slide para modificarlo, mostrando los valores iniciales con la data del slide
            slideData = await apiPrivate.Get(`slides/${id}`);
            setInitialValues({...initialValues, 
                                name: slideData.name, 
                                description: slideData.description,
                                image: slideData.image,                               
                                order: slideData.order});
        }else{ // si no hay id, se crea un slide desde 0, pero se recupera el ultimo numero de order cargado, para setear el nuevo al valor siguiente
            slideData = await apiPrivate.Get('slides');
            if(slideData.length > 0){
                let final = slideData.length - 1; // busco la ultima posicion del array
                let lastOrder = slideData[final].order; // accedo al ultimo order en el array
                setInitialValues({...initialValues, order: ++lastOrder}); // seteo el nuevo order al valor siguiente
            }
        }
    }, []);
         
    
    const handleChange = (e) => {       
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value});
        }        
              
        if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value});
        }
    }

    const validateFields = () => {
        
        if(initialValues.name === '' || initialValues.name.length < 4 ){
            setErrors({...errors, name:"El campo 'Titulo' debe contener al menos 4 caracteres"});
            return false;
        }else{setErrors({...errors, name:""})}
        
        if(initialValues.description === ''){
            setErrors({...errors, description:"Debe incluir una 'Descripcion'"});
            return false;            
        }else{setErrors({...errors, description:""})}
        
        if(initialValues.image === ''){
            setErrors({...errors, image: "Debe incluir una imagen"});
            return false;
        }else{setErrors({...errors, image: ""})}
       
        return true;
    };

    
   
    const handleSubmit = (e) =>{
        e.preventDefault();        
       let validate = validateFields();

        if(validate){
            if(id){            
                apiPrivate.Put(`slides/${id}`, initialValues);
                console.log("Formulario editado");
            }else{           
                apiPrivate.Post('slides', initialValues);
                console.log("Formulario creado");
            }
            setFormSubmited(true);
            setTimeout(() => setFormSubmited(false), 5000); 
            console.log(initialValues);
        }        
    }
    
    

    return (
        <form className="form-container" onSubmit={ handleSubmit }>
            <h3>FORMULARIO CREACION/EDICION DE SLIDE</h3>
            <div className="input-field"><b>Order N°: { initialValues.order }</b></div>
            
            <input className="input-field" type="text" name="name" value={ initialValues.name } 
                    onChange={ handleChange } placeholder="Titulo" />
            <div>
                <p className="error">{ errors.name }</p>
            </div>
            <div >
                <CKEditor 
                    editor={ ClassicEditor }
                    data={ initialValues.description }
                    name="description"
                                       
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                         setInitialValues((statePrev) => ({...statePrev, description:data}));                        
                    }}
                />
                <p className="error">{ errors.description }</p>
           </div>
                      
           <div> 
              {(!id) ?  /*si es de creacion se deja el value, si es edicion no se puede traer el value al input file, asi que lo dejo vacio y pongo la ruta en un parrafo */    
                <input type="file" accept="image/png, image/jpeg" name="image" 
                    value={ initialValues.image } onChange={ handleChange } /> :
                <> 
                    <input type="file" accept="image/png, image/jpeg" name="image" 
                        value='' onChange={ handleChange } />
                    <p className="image-scr">{ initialValues.image }</p>
                </> 
                }
                
                <p className="error">{ errors.image }</p>
                <br />             
                { initialValues.image && <img scr={ initialValues.image } className="myImg" alt="imagen" /> }         
            </div>
            <button className="submit-btn" type="submit">Enviar</button>

            {formSubmited && <p className="success">Formulario creado/modificado exitosamente!</p>}
            
        </form>
    );
}
 
export default SlidesForm;