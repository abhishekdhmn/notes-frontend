import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"
import { useDispatch } from "react-redux";
import { logIn, } from "../features/authenticationSlice";

function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username, password
        }
        dispatch(logIn(user));
        navigate("/");
    }

    return (
        <div className="form-container" >
            <div className="form-box">
                <form className="form" onSubmit={(e) => handleLogin(e)} >
                    <h2>Login</h2>
                    <input type="text" name="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="tab-button">Login</button>
                </form>
            </div>
            <div className="form-box">
                <h2>Don't have an account?</h2>
                <button className="tab-button" onClick={() => navigate("/signup")}>Signup</button>
            </div>
        </div>
    )
}

export default Login;