import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Admin = () => {
    const [isAuth, setIsAuth] = useState(false);

    if (!isAuth) {
        return <Navigate to="/" />
    }

    return (
        <div>admin Page</div>
    )
}

export default Admin;