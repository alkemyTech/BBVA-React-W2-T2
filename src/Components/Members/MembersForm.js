import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alert from '../Alert/Alert'
import '../FormStyles.css';

const MembersForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    image:'',
    linkedinUrl:"",
    facebookUrl:""
  })



  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setInitialValues({...initialValues, name: e.target.value})
    } 
    if(e.target.name === 'image'){
      setInitialValues({...initialValues, image: e.target.value})
    }     
    if(e.target.name === 'description'){
      setInitialValues({...initialValues, description: e.target.value})
    }
    if(e.target.name === 'linkedinUrl'){
      setInitialValues({...initialValues, linkedinUrl: e.target.value})
    } 
    if(e.target.name === 'facebookUrl'){
      setInitialValues({...initialValues, facebookUrl: e.target.value})
    } 
  }
 
  // valido las redes sociales  
  const validateSocialNetwork = (socialNetwork = '', urlSocialNetwork = '') => {   
    if (urlSocialNetwork.includes(`https://www.${socialNetwork}.com/`)) {
      return true      
    }else{
      return false
    }
  }
 

  
    // Validaciones de los campos 
    const requiredFields = () => {
      if (initialValues.name === "" || initialValues.name.length < 4) {
          Alert("error", "El campo nombre no puede estar vacio/ Debe ser mayor a 4 letras", "error")            
          return true;          
      }
      if (initialValues.description === "") {
          Alert("error", "El campo descripción no puede estar vacio", "error")
          return true;         
      }

      if (!validateSocialNetwork('facebook', initialValues.facebookUrl)) {
        Alert("error", "Perfil de Facebook no valido", "error")
        return false;        
      }
      if (!validateSocialNetwork('linkedin', initialValues.linkedinUrl)) {
        Alert("error", "Perfil de Linkedin no valido", "error")  
        return false;      
      }
    
    }







  const handleSubmit = (e) => {
    e.preventDefault();
    if (requiredFields()) {
      return      
   }

  
 
    console.log(initialValues);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Nombre"></input>
     <div className='input-field img-input-members'>
        <img className="members-image" src={initialValues.image} alt="membersImagen" />
        <input className="img-members"  type="file" accept=".jpg,.png" name="image" placeholder="members-Image" />        
    </div>
    <div>
                <CKEditor
                editor={ ClassicEditor }
                data={initialValues.description}  
                name="content"             
                onChange={ ( event, editor ) => {
                    const data = editor.getData();                    
                    setInitialValues((statePrev) => ({...statePrev, description:data}));
                }}                
            />
     </div>
     <input className="input-field" type="url" name="linkedinUrl" value={initialValues.linkedinUrl} onChange={handleChange} placeholder="Perfil de LinkedIn"></input>
     <input className="input-field" type="url" name="facebookUrl" value={initialValues.facebookUrl} onChange={handleChange} placeholder="Perfil de facebook"></input>
     
      <button className="submit-btn" type="submit">Send</button>
    </form>
  );
}
 
export default MembersForm;