
import React, { useState } from 'react';

const EditHome =  () => {
    const [editValues, setEditValues] = useState({
        tittle: '',
        img1: '',
        img1Text: '',
        img2: '',
        img2Text: '',
        img3: '',
        img3Text: '',
    });

    function handleChange(e) {
        if (e.target.name === 'tittle') {
            setEditValues({ ...editValues, tittle: e.target.value });
        } if (e.target.name === 'img1Text') {
            setEditValues({ ...editValues, img1Text: e.target.value });
        } if (e.target.name === 'img1') {
            setEditValues({ ...editValues, img1: e.target.value });
        } if (e.target.name === 'img2Text') {
            setEditValues({ ...editValues, img2Text: e.target.value });
        } if (e.target.name === 'img2') {
            setEditValues({ ...editValues, img2: e.target.value });
        } if (e.target.name === 'img3Text') {
            setEditValues({ ...editValues, img3Text: e.target.value });
        } if (e.target.name === 'img3') {
            setEditValues({ ...editValues, img3: e.target.value });
        } 

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(editValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            Texto de Bienvenida:
            <input className="input-field" type="text" name="tittle" value={editValues.tittle} onChange={handleChange} placeholder="Titulo de bienvenida" minLength={20} required></input>
            
            Imagen 1:
            <input className="input-field" type="text" name="img1Text" value={editValues.img1Text} onChange={handleChange} placeholder="Descripción de la imagen" required></input>
            <input name="img1" type="file" accept="image/png, image/jpeg" value={editValues.img1} onChange={handleChange} required></input>
            
            Imagen 2: 
            <input className="input-field" type="text" name="img2Text" value={editValues.img2Text} onChange={handleChange} placeholder="Descripción de la imagen" required></input>
            <input name="img2" type="file" accept="image/png, image/jpeg" value={editValues.img2} onChange={handleChange} required></input>
            
            Imagen 3:
            <input className="input-field" type="text" name="img3Text" value={editValues.img3Text} onChange={handleChange} placeholder="Descripción de la imagen" required></input>
            <input name="img3" type="file" accept="image/png, image/jpeg" value={editValues.img3} onChange={handleChange} required></input>
            
            <button className="submit-btn" type="submit">Enviar</button>
        </form>
    );
}
export default EditHome;