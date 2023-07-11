const Input = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <input type="text" placeholder="cool" onChange={handleChange}></input>
    )
}

export default Input;