import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import RegisterForm from '../Auth/RegisterForm';
import apiPrivate from '../../Services/privateApiService';
import Alert from '../Alert/Alert'

const UserForm = () => {
    const[sendForm, setSendForm] = useState(false);
    let { id } = useParams();
    //idHardCode = 3537;

     //if we have id, we took it and put the information in the inputs.
    const responseData = async() => {
    //idHardCode = 3537
        if (id) {
            console.log(id)
            const endPoint = `users/${id}`;
            const res = await apiPrivate.Get(endPoint);
            const { name, email, password, role_id, profile_image } = await res.data.id;
            setSendForm({
                name, email, password, role_id, profile_image
            });
        }

    }

    useEffect(() => {    
        responseData ()
    }, []);

    /* const resData = async () => {
        //const idHardCode = 2289
        if(id) {
            const endPoint = `users/${id}`;
            apiPrivate.Put(endPoint, newValues)
            Alert("", "La categoría fue modificada con éxito!", "success")
        } else {
            const endPoint = `users`;
            apiPrivate.Post(endPoint, newValues)
            Alert("", "La categoría fue creada con éxito!", "success")
        }
    }

    resData(); */

    return (
        <>
        <Formik
            initialValues={{
                name:'',
                email:'',
                password:'',
                role_id:'',
                profile_image:''
            }}
            
            validate={(newValues) => {
                let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{7,15}[^'\s]/;
                let wrong ={};

                //Validating name
                if (!newValues.name) {
                    wrong.name = "Debe ingresar un Nombre de Usuario"
                } else if (newValues.name.length < 4){
                    wrong.name = "El Nombre de Usuario debe tener al menos 4 caracteres."
                }

                //Validating email
                if(!newValues.email){
                    wrong.email = "Debe ingresar una Dirección de Correo Electrónico"
                } else if (!regexEmail.test(newValues.email)) {
                    wrong.email ="Dirección de correo inválida"
                }

                //Validating password
                if(!newValues.password){
                    wrong.password = "Debe ingresar una Password"
                } else if (!regexPassword.test(newValues.password)) {
                    wrong.password ="Password incorrecta"
                }

                //Validating role_id
                if(newValues.role_id === ""){
                    wrong.role_id = "Debe ingresar un Rol"
                }

                //Validating profile_image
                if(newValues.profile_image === ""){
                    wrong.profile_image = "Debe cargar una Imagen"
                } //else if (newValues.profile_image !== ".jpeg") {
                  //  wrong.profile_image ="La imagen debe tener una extensión jpg"
                //}

                return wrong;
            }}

            onSubmit={(newValues, {resetForm}) => { //me crea el objeto con todos los valores cargados
                resetForm();
                console.log(newValues); //puedo usar newValues.name, por ejemplo. //desde acá me conecto a la API
                setSendForm(true);
                setTimeout(() => setSendForm(false), 1000);

                /*  //if we have id, we took it and put the information in the inputs.
                const responseData = async() => {
                idHardCode = 3537
                if (idHardCode) {
                    console.log(idHardCode)
                    const endPoint = `users/${idHardCode}`;
                    const res = await apiPrivate.Get(endPoint);
                    const { name, email, password, role_id, profile_image } = await res.data.idHardCode;
                    setSendForm({
                        name, email, password, role_id, profile_image
                    });
                }
                responseData () */

                const resData = async () => {
                    //idHardCode = 3537
                    if(id) {
                        const endPoint = `users/${id}`;
                        apiPrivate.Put(endPoint, newValues)
                        //Alert("", "El usuario fue modificado con éxito!", "success")
                    } else {
                        const endPoint = `users`;
                        apiPrivate.Post(endPoint, newValues)
                        //Alert("", "El usuario fue creado con éxito!", "success")
                    }
                }
            
                resData();
        }
            }
            
        >
            {( {errors} ) => (
             //{( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                <Form className='form-container'>
                    {/* {console.log(errors)} */}

                    <Field 
                    className='input-field' 
                    type="text" 
                    id='name' 
                    name='name' 
                    placeholder='Nombre' 
                    />
                    <ErrorMessage name='name' component={() => (
                        <div className='error'>{errors.name}</div>
                    )} />
                    
                    <Field 
                    className='input-field' 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Email' 
                    />
                    <ErrorMessage name='email' component={() => (
                        <div className='error'>{errors.email}</div>
                    )} />

                    <Field 
                    className='input-field' 
                    type='password' 
                    id='password' 
                    name='password' 
                    placeholder='Password' 
                    />
                    <ErrorMessage name='password' component={() => (
                        <div className='error'>{errors.password}</div>
                    )} />
                    
                    <Field name='role_id' as ="select" className='input-field' id='role_id'>
                        <option value="" disabled > Seleccione el rol</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                    </Field>
                    <ErrorMessage name='role_id' component={() => (
                        <div className='error'>{errors.role_id}</div>
                    )} />

                    <Field 
                    type="file" 
                    accept="image/png, image/jpeg" 
                    id='profile_image' 
                    name='profile_image' 
                    
                    />
                    <ErrorMessage name='profile_image' component={() => (
                        <div className='error'>{errors.profile_image}</div>
                    )} />

                    <button className='submit-btn' type='submit'>Send</button>
                    {sendForm && <p className='sendSuccessfully'>¡Formulario enviado con éxito!</p>}
                </Form>
            )}
        </Formik>
        </>
    );
}
 
export default UserForm;