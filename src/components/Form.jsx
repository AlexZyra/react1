import React from "react";

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter text" />
            <button type="submit">Sub</button>
        </form>
    )
}

export default Form