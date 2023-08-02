const Input = (props) => {
    // const handleChange = (e) => {
    //     console.log(e.target.value);
    // }

    // return (
    //     <input type="text" placeholder="cool" onChange={handleChange}></input>
    // )


    const {type = "text", placeholder, value, onChange} = props

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)} 
        />
    )

}

export default Input;