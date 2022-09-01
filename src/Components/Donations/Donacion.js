import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Donacion.css';
import file from './donationMessage' ;

function Donacion(){

    const history = useHistory();

    const [errors, setErrors] = useState({});
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        amount: ''
    });

    const validateFields = () => {
        
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        // solo letras y espacios, hasta longitud 60
        const regexName = /^[a-zA-ZÀ-ÿ\s]{1,60}$/;
        const regexNum = /^[0-9]+$/;        
        
        if(!initialValues.name){
            setErrors({...errors, name: file.errorMessage.emptyName});
            return false;
        }else if(!regexName.test(initialValues.name)){
            setErrors({...errors, name: file.errorMessage.wrongName});
            return false;
        }else{ errors.name = ''; }        
        
        if (!initialValues.email) {
          setErrors({...errors, email: file.errorMessage.emptyEmail});
          return false;
        } else if (!regexEmail.test(initialValues.email)) {
            setErrors({...errors, email: file.errorMessage.wrongEmail});
            return false; 
        } else{ errors.email = '';}        

        if (!initialValues.amount) {
            setErrors({...errors, amount: file.errorMessage.emptyAmount});
            return false;
        }else if(!regexNum.test(initialValues.amount)){
            setErrors({...errors, amount: file.errorMessage.wrongAmount});
            return false;
          }else{ errors.amount = ''; }        
        return true;
      };
    

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'email'){
            setInitialValues({...initialValues, email: e.target.value})
        } if(e.target.name === 'amount'){
            setInitialValues({...initialValues, amount: e.target.value})
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validateFields()){                   
            history.push(`/gracias?name=${initialValues.name}`);
            console.log("Donacion realizada");                                
            console.log(initialValues);
        }                  
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="container">
                <div className="center">
                    <h2>{ file.thanks.title }</h2>
                    <input className="inputField" type="text" name="name" value={ initialValues.name } onChange={handleChange} placeholder="Nombre"></input>
                    {errors.name && <p className="error">{ errors.name }</p> }
                    
                    <input className="inputField" type="text" name="email" value={ initialValues.email } onChange={handleChange} placeholder="Email"></input>
                    {errors.email && <p className="error">{ errors.email }</p> }
                    
                    <input className="inputField" type="text" name="amount" value={ initialValues.amount } onChange={handleChange} placeholder="Monto"></input>
                    {errors.amount && <p className="error">{ errors.amount }</p> }
               
                    <button className="button mp" type="submit">mercadopago</button>
                    <button className="button pay" type="submit">Pagar</button>
                </div>            
            </div>
        </form>
        
    )
}

export default Donacion;