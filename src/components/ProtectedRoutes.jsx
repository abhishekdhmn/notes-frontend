import { useNavigate } from "react-router-dom";
import isAuthenticated from "../hooks/isAuthenticated";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated() == null) {
            navigate("/login");
        }
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoutes;
