import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '../Alert/Alert'
import apiPrivate from '../../Services/privateApiService'
import '../../Components/FormStyles.css';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        image: '',
        content: '',        
        category_id:''
    });

       
    const { id } = useParams();    
    const [categories, setCategories] = useState([]);
    

    
   
    const responseData = async() => {
       /*  const idHarko = 2305 */
        if (id) {
            // endpoint pasandole el id de las news para editarla 
            const endPoint = `news/${id}`;
            const res = await apiPrivate.Get(endPoint);
            const { name, image, content, category_id } = await res.data.data;
            setInitialValues({
                name, image, content, category_id
            });           

        }
        //obteniendo las categorias desde el endpoint
        const endPoint = 'categories'
       let categoryArray =  await apiPrivate.Get(endPoint)
       setCategories(categoryArray)
             
    }

    useEffect(() => {       
        responseData()             
    }, [])


    // Validaciones de los campos 
    const requiredFields = () => {
        if (initialValues.name === "" || initialValues.name.length < 4) {
            Alert("error", "El campo nombre no puede estar vacio/ Debe ser mayor a 4 letras", "error")            
            return true;          
        }
        if (initialValues.content === "") {
            Alert("error", "El campo content no puede estar vacio", "error")
            return true;         
        }
        if (initialValues.category_id === "") {
            Alert("error", "Debe seleccionar una categoria existente", "error")
            return true;           
        }
      }

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'content'){
            setInitialValues({...initialValues, content: e.target.value})        
        } if(e.target.image === 'image'){
            setInitialValues({...initialValues, image: e.target.value})
        }if(e.target.name === 'category') {
            setInitialValues({...initialValues, category: e.target.value})
        }
    }

  
    const resData = async () =>{
        if (id) {
            const endPoint = `news/${id}`;
            apiPrivate.Put(endPoint, initialValues)     
            Alert("Bien", "Se ha modificado la novedad", "success")    
        } else {
            const endPoint = "news";
            apiPrivate.Post(endPoint, initialValues) 
            Alert("Bien", "Se ha creado la novedad", "success")            
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (requiredFields()) {
            return      
        }

        resData()     
       
    }

    
    






    //agrego el input para imagen
    //cambio el input de content por la libreria CKEditor

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange}></input>            
        <div className='input-field img-input-news'>
            <img className="news-image" src={initialValues.image} alt="NewsImagen" />
            <input className="img-select" type="file" name="image" placeholder="News-Image" />        
        </div>
            <div>
                <CKEditor
                editor={ ClassicEditor }
                data={initialValues.content}  
                name="content"             
                onChange={ ( event, editor ) => {
                    const data = editor.getData();                    
                    setInitialValues((statePrev) => ({...statePrev, content:data}));
                }}                
            />
           </div>
            <select className="select-field" name="category" value={initialValues.category_id || ''} onChange={e => setInitialValues({...initialValues, category_id:e.target.value })}>
               <option value="" disabled>Select category</option>
               {categories.map((categorys) =>{                        
                    return(
                        <option value={categorys.id} key={categorys.id}>{categorys.description}</option>
                    )
               })}
               
            </select>
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default NewsForm;