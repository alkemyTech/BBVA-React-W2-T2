import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import image from '././login.png'
import "./Login.css";

const Login = () => {

    // el useState para cambiar el estado del envio y mostrar mensaje de enviado con exito
    const [formSent, setformSent] = useState(false)


  return (
    <div className="parent-container">
     
      <div className="contents">
               
      <Formik
      initialValues={{
          email: "",
          password: ""
        }}
       validate= {(worth) => {
          console.log(worth)
          //Expresiones regulares para los campos de email y contraseña
          let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}[^'\s]/

          let errors = {};
          
            // validacion de correo si esta vacio el input o no tiene formato correcto
          if (!worth.email) {
              errors.email = "*This field can not be blank"                
          } else if (!regexEmail.test(worth.email)) {
              errors.email = "Wrong mail";                
          }

            // validacion de password si esta vacio el input o no tiene formato correcto
            // ejemplo de contraseña Ai311Xbcu3r16--**
          if (!worth.password) {
              errors.password = "*This field can not be blank"                
          } else if (!regexPassword.test(worth.password)) {
              errors.password = "Incorrect password";            
          }                    

          //esto forma parte de Formik, y ayuda a controlar los errores 
          return errors;
         
        }}

      onSubmit={(worth, {resetForm}) =>{
          resetForm()
          console.log(worth)        
          setformSent(true)
          setTimeout( ()=> setformSent(false), 3000)
      }}
      
      >
      { ({errors}) => (
          <Form className="login-form">
          <div className="title-header">
            <h3>Bienvenido</h3>
            <h1>Inicia sesión en tu cuenta!</h1>         
        </div>  
              <div>
                      <div>
                          
                          <Field 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="Email"   
                          />                            
                          <ErrorMessage name="email" component={() => (
                              <div className='error'>{errors.email}</div>
                             )} />
                        
                             
                      </div>

                      <div>
                          
                          <Field
                           type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"                            
                            />  
                            <ErrorMessage name="email" component={() =>(
                              <div className='error'>{errors.password} </div>
                            )} />                           
                                    
                      </div>  
                      <button type="submit">Inicia sesión</button>  
                      
                      {formSent && <p className="success-login">Formulario Enviado</p> }             
              </div>          
          </Form> 
      )}
      </Formik>
      <div className="redirect-register">
            <h4>No tienes cuenta?</h4>
        <Link className="route-register" to="/register">
            <span><h3>Registrate</h3></span>       
        </Link>      
      </div>            
      </div>

        <div>
             <img className="image-rigth-login" src={image} alt="..." />
        </div>
    </div>
  )
}

export default Login