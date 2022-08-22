import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Imagen from '././login.png'
import "./Login.css";

const Login = () => {

    // el useState para cambiar el estado del envio y mostrar mensaje de enviado con exito
    const [formEnviado, setFormEnviado] = useState(false)


  return (
    <div className="contenedor">
     
      <div className="contenido">
               
      <Formik
      initialValues={{
          email: "",
          password: ""
        }}
       validate= {(valor) => {
          console.log(valor)
          //Expresiones regulares para los campos de email y contraseña
          let expresionRegularEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          let expresionRegularPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,15}[^'\s]/

          let errors = {};
          
            // validacion de correo si esta vacio el input o no tiene formato correcto
          if (!valor.email) {
              errors.email = "*This field can not be blank"                
          } else if (!expresionRegularEmail.test(valor.email)) {
              errors.email = "Wrong mail";                
          }

            // validacion de password si esta vacio el input o no tiene formato correcto
            // ejemplo de contraseña Ai311Xbcu3r16--**
          if (!valor.password) {
              errors.password = "*This field can not be blank"                
          } else if (!expresionRegularPassword.test(valor.password)) {
              errors.password = "Incorrect password";            
          }                    

          //esto forma parte de Formik, y ayuda a controlar los errores 
          return errors;
         
        }}

      onSubmit={(valor, {resetForm}) =>{
          resetForm()
          console.log(valor)        
          setFormEnviado(true)
          setTimeout( ()=> setFormEnviado(false), 3000)
      }}
      
      >
      { ({errors}) => (
          <Form className="formulario">
          <div className="titulo">
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
                      <button className="boton"  type="submit">Inicia sesión</button>  
                      
                      {formEnviado && <p className="exito">Formulario Enviado</p> }             
              </div>          
          </Form> 
      )}
      </Formik>
      <div className="redirect-register">
            <h4>No tienes cuenta?</h4>
        <Link className="ruta" to="/register">
            <span><h3>Registrate</h3></span>       
        </Link>      
      </div>            
      </div>

        <div className="imagen">
             <img className="image-rigth-login" src={Imagen} alt="..." />
        </div>
    </div>
  )
}

export default Login