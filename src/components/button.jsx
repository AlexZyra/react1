const Button = ({txt, onClick}) => {
    // console.log(props);
    

    return (
        <button onClick={onClick}>{txt}</button>
    );
};
export default Button;