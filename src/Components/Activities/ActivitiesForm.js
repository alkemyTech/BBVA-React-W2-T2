import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import apiPrivate from '../../Services/privateApiService';

const ActivitiesForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: ''
    });

    const responseData = async() => {
        if(!initialValues.name && !initialValues.description && !initialValues.image) {
            const endPointPost = '/activities/create'
            await apiPrivate.Post(endPointPost, initialValues)
                .then( (res) => {
                    console.log(res.data)
                    setInitialValues(res.data.data)
                })
        } else {
            const endPointPatch = '/activities/:id'
            await apiPrivate.Patch(endPointPatch, initialValues)
                .then( (res) => {
                    console.log(res.data)
                    setInitialValues(res.data.data)
                })
        }
    }
    
    useEffect(() => {       
        responseData()             
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleChange(e) {
        if (e.target.name === 'name') {
            setInitialValues({ ...initialValues, name: e.target.value });
        } if (e.target.name === 'description') {
            setInitialValues({ ...initialValues, description: e.target.value });
        } if (e.target.name === 'image') {
            setInitialValues({ ...initialValues, image: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }
    
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Nombre" required></input>
            <CKEditor
                    editor={ ClassicEditor }
                    data={initialValues.description}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        initialValues.description = editor.getData();
                        console.log( initialValues.description);
                    } }
                />
            
            <input name="image" type="file" accept="image/png, image/jpeg" value={initialValues.image} onChange={handleChange} required></input>
            <button className="submit-btn" type="submit">Enviar</button>
        </form>
    );
}

export default ActivitiesForm;