import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService';
import '../FormStyles.css';
import swAlert from 'sweetalert';
import { useParams } from 'react-router-dom';

const CategoriesForm = () => {
    
     //let token = sessionStorage.getItem('token');
    //console.log(props);   
    
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image:''
    });

    const { id } = useParams();
    
    //if we have id, we took it and put the information in the inputs.
    const responseData = async() => {
        //const idHardCode = 2289
        if (id) {
            const endPoint = `categories/${id}`;
            const res = await apiPrivate.Get(endPoint);
            const { name, description, image } = await res.data.id;
            setInitialValues({
                name, description, image
            });
        }
    }

    useEffect(() => {
        
        responseData ()

    }, []);

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        }
    }
    //if we have id, then we modify the category - if we don't have it, we create a new one.
    const resData = async () => {
        //const idHardCode = 2289
        if(id) {
            const endPoint = `categories/${id}`;
            apiPrivate.Put(endPoint, initialValues)
            swAlert("", "La categoría fue modificada con éxito!", "success")
        } else {
            const endPoint = `categories`;
            apiPrivate.Post(endPoint, initialValues)
            swAlert("", "La categoría fue creada con éxito!", "success")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        
        const category = e.target.name.value;
        const descrip = initialValues.description;
        const imageCat = e.target.image.value;
        
        //validations
        if(category === "" || descrip === "" || imageCat === ""){
            swAlert("", "Faltan ingresar datos", "warning");
            return;
        }
        if(category.length < 4){
            swAlert("", "La categoría debe tener al menos cuatro caracteres", "warning");
            return;
        }

        resData();
        
    }

    return (
        
        <>
        {/*{ !token && <Navigate to="/" />}*/}

        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Categoría"></input>
            
            <div> 
                <CKEditor
                    editor={ ClassicEditor}
                                
                    data={initialValues.description}
                    name="description" //no me está tomando el name
                    //data = "<p> </p>"
                    //value={initialValues.description} //tampoco me toma el value

                    onReady={ editor => {
                        console.log("Editor está listo para usarse", editor);
                    } }
                
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setInitialValues({...initialValues, description:data})
                        //setInitialValues((statePrev) => ({...statePrev, description:data}));
                        console.log( { event, editor, data });

                        
                    } }

                />
            </div>
            {/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some description"></input> */}
            <input name="image" type="file" accept="image/png, image/jpeg" value={initialValues.image} onChange={handleChange} required />
            <button className="submit-btn" type="submit">Send</button>
        </form>
        </>
    );
}
 
export default CategoriesForm;
