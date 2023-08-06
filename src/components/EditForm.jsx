import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';

const EditForm = (props) => {
    const { editedTodo, onUpdate } = props
    const [updatedTitle, setUpdatedTitle] = useState(editedTodo.title)
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onUpdate({...editedTodo, title: updatedTitle})
    }

    return (
        <form onSubmit={handleFormSubmit} className='form'>
            <Input value={updatedTitle} onChange={setUpdatedTitle}/>
            <Button text="Save" type="submit" />
        </form>
    )
}

export default EditForm;