import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css"
import { useDispatch } from "react-redux";
import { SignUp } from "../features/authenticationSlice";

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        const user = {
            username,password
        }
        dispatch(SignUp(user));
        navigate("/login");
    }
    
    return (
        <div className="form-container" >
            <div className="form-box">
                <form className="form" onSubmit={(e) => handleSignup(e)} >
                    <h2>Signup</h2>
                    <input type="text" name="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="tab-button">Sign Up</button> 
                </form>
            </div>
        </div>
    )
}

export default Signup;