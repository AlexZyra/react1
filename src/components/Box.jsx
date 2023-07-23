import React, { useEffect } from "react";

const Box = () => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("Click");
    // }, [count]);
    
    useEffect(() => {
        const handleClick = () => {
            console.log('click');
        }

        window.addEventListener('click', handleClick);

        return () => {

        }
    }, [])


    return (
        <div className="box">
            {/* <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}


        </div>
    )

}

export default Box;