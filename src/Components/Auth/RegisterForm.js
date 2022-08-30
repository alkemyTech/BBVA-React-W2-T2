import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';

import '../FormStyles.css';

function RegisterForm () {    
    
    const [formSubmited, setFormSubmited] = useState(false);

    let backupFormData; // variable auxiliar para almacenar el objeto con los inputs validados. No me funciono con el useState en initialValues   
    const initialValues = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        // solo letras y espacios, hasta longitud 40
        const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        //Mínimo 6 caracteres, al menos una letra, un número y un carácter especial:
        const regexPassword = /^(?=.*?[A-Za-z])(?=.*?\d)(?=.*?[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
        
        if(!values.name){
            errors.name = "Por favor ingrese un nombre";
        }else if(!regexName.test(values.name)){
            errors.name = "El nombre solo puede contener letras y espacios"
        }

        if(!values.lastName){
            errors.lastName = "Por favor ingrese su apellido";
        }else if(!regexName.test(values.lastName)){
            errors.lastName = "El apellido solo puede contener letras y espacios"
        }
        
        if (!values.email) {
          errors.email = "Ingrese un email";
        } else if (!regexEmail.test(values.email)) {
          errors.email = "Email invalido";
        }

        if (!values.password) {
          errors.password = "Debe ingresar una contraseña";
        } else if (!regexPassword.test(values.password)) {
          errors.password = "La contraseña debe contener al menos 6 caracteres, 1 letra, 1 numero y 1 simbolo";          
        }

        if (values.confirmPassword && !values.password) {
            errors.confirmPassword = "Debe ingresar primero la contraseña";
        }else if(!values.confirmPassword){    
            errors.confirmPassword = "Debe confirmar la contraseña";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Error: reingrese contraseña";
        }

        return errors;
      };
    
    
    return (
        <>
            <Formik 
                initialValues={ initialValues }
                validate={ validate }                

                onSubmit={(values, {resetForm}) => {
                    backupFormData = {...values};      
                    console.log(backupFormData);
                    resetForm();                            
                    setFormSubmited(true);
                    setTimeout(() => setFormSubmited(false), 3000);                                       
                }}
            >
                {( {errors, touched} ) => (
                    <Form className="form-container" >
                        <Field className="input-field" type="text" name="name"  placeholder="Enter name"></Field>
                        {touched.name && errors.name && <div className="error">{ errors.name }</div>}
                        
                        <Field className="input-field" type="text" name="lastName" placeholder="Enter last name"></Field >
                        {touched.lastName && errors.lastName && <div className="error">{ errors.lastName }</div>}
                        
                        <Field className="input-field" type="text" name="email" placeholder="mail@mail.com"></Field >
                        {touched.email && errors.email && <div className="error">{ errors.email }</div>}
                        
                        <Field className="input-field" type="password" name="password" placeholder="Enter a password"></Field >
                        {touched.password && errors.password && <div className="error">{ errors.password }</div>}
                        
                        <Field className="input-field" type="password" name="confirmPassword" placeholder="Confirm password"></Field >
                        {touched.confirmPassword && errors.confirmPassword && <div className="error">{ errors.confirmPassword }</div>}
                        
                        <button className="submit-btn" type="submit">Register</button>

                        {formSubmited && <p className="success">Formulario enviado exitosamente!</p>}
                    </Form>
                )}                
            </Formik>            
        </>
    );
}
 
export default RegisterForm;